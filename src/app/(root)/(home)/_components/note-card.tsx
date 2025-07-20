import { Post } from "@prisma/client";

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

const NoteCard = ({ notes }: { notes: Post[] }) => {
  dayjs.extend(relativeTime);

  return (
    <div>
      {notes.map((note) => (
        <Card key={note.id} className="mt-2 shadow-sm">
          <CardContent className="!px-0">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  <Link href={`/note/${note.slug}`}>{note.title}</Link>
                </CardTitle>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {dayjs(note.createdAt).fromNow()}
                </p>
              </div>
              <CardDescription className="truncate">
                {note.content.slice(0, 200)}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-2 flex items-center justify-between">
              <p className="text-sm flex items-center gap-1 text-neutral-600 dark:text-neutral-400">
                <AtSign className="size-3" />
                <span>nuralam</span>
              </p>

              <Link href={`/note/${note.slug}`}>
                <ChevronRight className="size-4" />
              </Link>
            </CardFooter>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NoteCard;
