import { deleteTrace } from "@/actions/deleteTrace";
import { Ghost, Trace } from "@prisma/client";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogDescription,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { Pen, Trash, XCircleIcon } from "lucide-react";

const TraceCardAction = ({ trace, ghost }: { trace: Trace; ghost?: Ghost }) => {
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
    <>
      {trace.username === ghost?.username ? (
        <div className="flex w-full gap-2">
          <Button variant="outline">
            <Pen /> <span className="hidden md:inline">Edit</span>
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">
                <Trash /> <span className="hidden md:inline">Delete</span>
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  trace.
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
        </div>
      ) : (
        <div />
      )}
    </>
  );
};

export default TraceCardAction;
