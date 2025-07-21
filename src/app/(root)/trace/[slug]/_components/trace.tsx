"use client";
import { deleteTrace } from "@/actions/deleteTrace";
import TimeFormat from "@/components/time-format";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth-store";
import { Trace as TraceType } from "@prisma/client";
import { AtSign, Trash, XCircleIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Markdown from "react-markdown";
import { toast } from "sonner";

const Trace = ({ trace }: { trace: TraceType }) => {
  const ghost = useAuthStore((state) => state.ghost);

  const onDelete = async () => {
    const res = await deleteTrace({ id: trace.id });

    if (!res?.success) {
      toast.error(res?.error);
      return;
    }

    toast.success("Post deleted");
    redirect("/");
  };

  return (
    <section className="font-pt-serif py-6 px-4 md:py-12 md:px-6 mb-12">
      <div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold capitalize">
            {trace.title}
          </h1>
          <div className="flex items-center gap-2 md:gap-4 my-4 text-xs md:text-sm  text-neutral-500 dark:text-neutral-100">
            <p>
              —{" "}
              <TimeFormat
                time={trace.createdAt}
                format="ddd, MMM DD YYYY • HH:mm"
              />
            </p>
            <p className="flex items-center gap-x-1.5">
              <AtSign className="size-3" />
              <span>{trace.username}</span>
            </p>
          </div>
        </div>
        <article className="prose prose-blockquote:text-muted-foreground prose-blockquote:rounded-xs prose-blockquote:bg-foreground/5 w-full min-w-full prose-blockquote:border-l-foreground prose-blockquote:border-l-2 prose-blockquote:py-0.5 dark:prose-invert md:text-base text-sm prose-blockquote:px-4 prose-blockquote:text-xs md:prose-blockquote:text-base">
          <Markdown>{trace.content}</Markdown>
        </article>
      </div>
      <div className="relative mt-6 md:mt-12">
        <div className="my-2">
          <div className="flex w-full justify-end gap-2">
            {/* <Button> */}
            {/*   <Pen /> */}
            {/* </Button> */}
            {trace.username === ghost?.username && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">
                    <Trash />
                  </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the trace.
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel>
                      <XCircleIcon /> Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={onDelete}>
                      <Trash /> Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 border-t-4 [border-style:dotted]" />
          <span className="absolute fotn-bold font-playwrite text-xl -top-1/2 -translate-y-1/2 px-2 bg-background text-neutral-300 block left-1/2 -translate-x-1/2">
            End
          </span>
        </div>
      </div>
    </section>
  );
};

export default Trace;
