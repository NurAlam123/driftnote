"use client";

import { fetcher } from "@/lib/utils";
import { Post } from "@prisma/client";

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
import NoteCard from "./note-card";

const Notes = () => {
  dayjs.extend(relativeTime);

  const limit = 10;

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver>(null);
  const [last, setLast] = useState<boolean>(true);

  const getKey = (
    pageIndex: number,
    previousPageData: { count: number; notes: Post[] },
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

  const { data, setSize, error, isLoading } = useSWRInfinite(getKey, fetcher);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (isLoading) return;
      const target = entries[0];

      if (target.isIntersecting && !isLoading) {
        setTimeout(() => {
          setSize((prev) => prev + 1);
        }, 200);

        observerRef.current?.unobserve(target.target);
      }
    },
    [isLoading, setSize],
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

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

  if (error) return <div>Failed to load</div>;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {data && (
        <Suspense fallback={<p>LOADiNg</p>}>
          <div>
            <div ref={containerRef}>
              {data?.map((noteData, i) => (
                <NoteCard key={i} notes={noteData.notes} />
              ))}

              {last && <div ref={cardRef} className="h-10" />}
            </div>
          </div>
        </Suspense>
      )}
    </>
  );
};

export default memo(Notes);
