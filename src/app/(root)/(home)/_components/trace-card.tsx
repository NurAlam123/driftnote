import { Trace } from "@prisma/client";
import Markdown from "react-markdown";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AtSign, ChevronRight } from "lucide-react";
import Link from "next/link";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TimeFormat from "@/components/time-format";

const TraceCard = ({ notes }: { notes: Trace[] }) => {
  dayjs.extend(relativeTime);

  return (
    <div>
      {notes.map((trace) => (
        <Card key={trace.id} className="mt-2 shadow-sm">
          <CardContent className="!px-0">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex-1">
                  <Link href={`/trace/${trace.slug}`}>{trace.title}</Link>
                </CardTitle>

                <Tooltip>
                  <TooltipTrigger>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      {dayjs(trace.createdAt).fromNow()}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <TimeFormat
                      time={trace.createdAt}
                      format="ddd, MMM DD YYYY • HH:mm"
                    />
                  </TooltipContent>
                </Tooltip>
              </div>
              <CardDescription className="truncate line-clamp-2 w-full text-wrap break-words text-sm">
                <Markdown>{trace.tldr.slice(0, 200)}</Markdown>
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-4 flex items-center justify-between">
              <p className="text-xs flex items-center gap-1 text-neutral-600 dark:text-neutral-400">
                <AtSign className="size-3" />
                <span>{trace.username}</span>
              </p>

              <Link href={`/trace/${trace.slug}`}>
                <ChevronRight className="size-4" />
              </Link>
            </CardFooter>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TraceCard;
