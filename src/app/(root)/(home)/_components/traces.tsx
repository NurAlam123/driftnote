"use client";

import { fetcher } from "@/lib/utils";
import { Trace } from "@prisma/client";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  memo,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useSWRInfinite from "swr/infinite";
import TraceCard from "./trace-card";
import { Skeleton } from "@/components/ui/skeleton";
import { DotIcon } from "lucide-react";

const Traces = () => {
  dayjs.extend(relativeTime);

  const limit = 10;

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver>(null);

  const [last, setLast] = useState<boolean>(true);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const getKey = (
    pageIndex: number,
    previousPageData: { count: number; notes: Trace[] },
  ) => {
    if (
      previousPageData &&
      previousPageData.notes.length >= previousPageData.count
    ) {
      setLast(false);
      return null;
    }
    return `/api/posts?limit=${pageIndex * limit}`;
  };

  const { data, size, setSize, error, isLoading } = useSWRInfinite(
    getKey,
    fetcher,
  );

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (isLoading) return;
      setIsFetching(true);
      const target = entries[0];

      if (target.isIntersecting && !isLoading) {
        setTimeout(() => {
          setSize((prev) => prev + 1);
          setIsFetching(false);
        }, 200);

        observerRef.current?.unobserve(target.target);
      }
    },
    [isLoading, setSize, setIsFetching],
  );

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.2,
      rootMargin: "20px",
    };
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(handleObserver, options);

    if (!cardRef.current) return;
    observerRef.current.observe(cardRef.current);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [handleObserver]);

  if (error) return <Traces.FailedTraces />;

  return (
    <>
      {isLoading && (
        <div className="space-y-2 mt-4">
          <Skeleton className="w-full h-32 rounded-xl" />
          <Skeleton className="w-full h-32 rounded-xl" />
          <Skeleton className="w-full h-32 rounded-xl" />
          <Skeleton className="w-full h-32 rounded-xl" />
          <Skeleton className="w-full h-32 rounded-xl" />
        </div>
      )}
      {!isLoading && data && (
        <>
          <Suspense fallback={<Skeleton className="w-full h-32 rounded-xl" />}>
            {!data[0].count && <Traces.NoTraces />}
            <div>
              <div ref={containerRef}>
                {data?.map((noteData, i) => (
                  <TraceCard key={i} notes={noteData.notes} />
                ))}

                {last && data[0].count > limit && (
                  <div ref={cardRef} className="h-2" />
                )}
                {isFetching && (
                  <div className="w-full flex justify-center items-center h-6">
                    <div>
                      <div className="loader w-2" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Suspense>
          {(!isLoading || !isFetching) && data[0].count <= limit * size && (
            <div className="flex flex-col justify-center items-center text-muted-foreground mt-4 text-xs">
              <p>You have reached the end.</p>
              <DotIcon />
            </div>
          )}
        </>
      )}
    </>
  );
};

Traces.NoTraces = function NoTraces() {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center">
      <div className="text-muted-foreground font-medium">
        ALL TRACES ARE VANISHED :&apos;({" "}
      </div>
    </div>
  );
};

Traces.FailedTraces = function FailedTraces() {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center">
      <div className="text-muted-foreground font-medium">NO TRACES FOUND</div>
    </div>
  );
};

export default memo(Traces);
