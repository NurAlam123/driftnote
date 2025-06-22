import { ArrowUpLeft, ArrowUpRight, NotepadTextDashed } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background flex items-center justify-center my-12 gap-4 w-full flex-col">
      <div>
        <div className=" text-center flex flex-col items-center space-y-4">
          <NotepadTextDashed className="size-64" />
          <p className="font-bold text-2xl">No Note Found</p>
        </div>
        <div className="text-start mt-12 flex gap-2 items-center justify-center">
          <Link
            className="font-bold flex bg-blue-400 text-background border border-background px-8 py-4 rounded-full relative hover:bg-background hover:border-blue-400 hover:text-blue-400 transition"
            href={"/"}
          >
            <ArrowUpLeft className="absolute left-4 top-2 size-4" />
            Home
          </Link>
          <Link
            className="font-bold flex bg-blue-400 text-background border border-background px-8 py-4 rounded-full relative hover:bg-background hover:border-blue-400 hover:text-blue-400 transition"
            href={"/note/write"}
          >
            Write Note
            <ArrowUpRight className="absolute right-4 top-3 size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
