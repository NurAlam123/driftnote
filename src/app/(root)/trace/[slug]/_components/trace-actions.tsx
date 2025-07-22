"use client";

import { markTrace } from "@/actions/markTrace";
import GhostIcon from "@/assets/ghost";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Ghost, Trace } from "@prisma/client";
import { redirect } from "next/navigation";

interface Props {
  trace: Trace;
  ghost: Ghost | null;
  mark: MarkProps;
}

interface MarkProps {
  marked: boolean;
  totalMark: string;
  setMarked: (value: boolean) => void;
  setTotalMark: (value: string) => void;
  onMarked?: () => void;
}

const TraceActions = ({ trace, mark, ghost }: Props) => {
  const onMarked = async () => {
    if (!ghost) redirect("/login");

    mark.setMarked(!mark.marked);
    mark.setTotalMark(
      String(
        !mark.marked ? Number(mark.totalMark) + 1 : Number(mark.totalMark) - 1,
      ).padStart(2, "0"),
    );

    const res = await markTrace({
      ghostID: ghost.id,
      traceID: trace.id,
      marked: !mark.marked,
    });

    if (!res) {
      mark.setMarked(false);
      mark.setTotalMark(String(Number(mark.totalMark) - 1).padStart(2, "0"));
      return;
    }

    if (!res.success) {
      mark.setMarked(false);
      mark.setTotalMark(String(Number(mark.totalMark) - 1).padStart(2, "0"));
      return;
    }
  };

  return (
    <div>
      <TraceActions.Mark
        onMarked={onMarked}
        marked={mark.marked}
        totalMark={mark.totalMark}
      />
    </div>
  );
};

// mark the trace
TraceActions.Mark = function MarkTrace({
  onMarked,
  marked,
  totalMark,
}: Partial<MarkProps>) {
  return (
    <Tooltip delayDuration={2 * 1000} disableHoverableContent>
      <div className="flex items-center gap-0.5">
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className="hover:bg-background dark:hover:bg-background !p-0 !w-fit active:scale-95"
            onClick={onMarked}
          >
            <GhostIcon marked={marked} className="size-7" />
          </Button>
        </TooltipTrigger>
        <p className="font-roboto text-sm font-medium">{totalMark}</p>
      </div>
      <TooltipContent>Mark the trace</TooltipContent>
    </Tooltip>
  );
};

export default TraceActions;
