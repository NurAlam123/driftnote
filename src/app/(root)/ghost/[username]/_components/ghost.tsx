"use client";

import TimeFormat from "@/components/time-format";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Ghost as GhostType, Trace } from "@prisma/client";
import { AlignRight, AtSign, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import TraceCardAction from "@/components/trace-card-action";
import { useAuthStore } from "@/store/auth-store";
import {
  getTracesByUsername,
  getTracesCountByUsername,
} from "@/actions/getTraces";
import { toast } from "sonner";

const Ghost = ({ username }: { username: string }) => {
  dayjs.extend(relativeTime);
  const ghost = useAuthStore((state) => state.ghost);

  const [traces, setTraces] = useState<Trace[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("Traces");
  const [count, setCounts] = useState<number[]>([]);

  useEffect(() => {
    getTracesCountByUsername({ username }).then((res) => setCounts(res));
  }, [username]);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const isMark = selectedOption === "Marked";

      const res = await getTracesByUsername({
        username,
        mark: isMark,
      });

      if (res?.error) {
        toast.error(res.error);
      } else if (res?.data) {
        setTraces(res.data);
      }

      setLoading(false);
    };

    fetchData();
  }, [username, ghost?.username, selectedOption]);

  const selectOptions = [
    {
      title: "Traces",
      value: "traces",
    },
    {
      title: "Marked",
      value: "marked",
    },
    // {
    //   title: "Saved",
    //   value: "saved",
    // },
  ];

  const onSelect = (selectedValue: string) => {
    const value = selectOptions.filter(
      (option) => option.value === selectedValue,
    )[0];

    setSelectedOption(value.title);
  };

  return (
    <div className="space-y-2">
      <div>
        <div>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-1 font-medium flex-1 pr-4">
              <AtSign className="size-6 md:size-12" />
              <span className="block text-lg md:text-3xl md:mb-1">
                {username}
              </span>
            </div>
            <div>
              <Button variant="secondary">Haunt</Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <Badge variant="outline">{count[0]} traces</Badge>
            {/* <div className="flex gap-2"> */}
            {/*   <Badge variant="secondary">123 haunters</Badge> */}
            {/*   <Badge variant="secondary">123 haunting</Badge> */}
            {/* </div> */}
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <h2 className="text-lg font-medium">{selectedOption}</h2>
          {ghost?.username === username && (
            <Select onValueChange={onSelect} defaultValue="posts">
              <SelectTrigger>
                <AlignRight />
              </SelectTrigger>
              <SelectContent>
                {selectOptions.map(({ title, value }) => (
                  <SelectItem key={value} value={value}>
                    {title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      </div>

      <div>
        {loading && (
          <div className="w-full flex items-center justify-center h-[30vh]">
            <div className="loader size-4" />
          </div>
        )}
        {!loading && (
          <div className="mt-2 overflow-auto pr-2">
            {traces.map((trace) => (
              <Ghost.Card key={trace.id} trace={trace} ghost={ghost || null} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Ghost;

Ghost.Card = function GhostCard({
  trace,
  ghost,
}: {
  trace: Trace;
  ghost: GhostType | null;
}) {
  return (
    <Card className="mt-2 shadow-sm">
      <CardContent className="!px-0">
        <CardHeader>
          <div className="text-xs text-neutral-600 dark:text-neutral-400">
            <TimeFormat
              time={trace.createdAt}
              format="ddd, MMM DD YYYY • HH:mm"
            />
          </div>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex-1">
              <Link href={`/trace/${trace.slug}`}>{trace.title}</Link>
            </CardTitle>
          </div>
          <CardDescription className="truncate line-clamp-2 w-full text-wrap break-words text-sm">
            <Markdown>{trace.tldr.slice(0, 200)}</Markdown>
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-6 flex items-center justify-between">
          {ghost && <TraceCardAction trace={trace} ghost={ghost} />}
          <Link href={`/trace/${trace.slug}`}>
            <ChevronRight className="size-4" />
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
