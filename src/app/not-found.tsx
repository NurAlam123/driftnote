import { Coffee } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background h-svh flex items-center justify-center gap-4 w-full flex-col">
      <div className="flex items-center gap-2">
        <p className="text-4xl font-bold text-blue-400">404</p>
        <Coffee className="size-32" />
      </div>
      <div>
        <p className="text-xl text-foreground">Nothing to read here.</p>
        <p className="text-xl font-bold text-foreground">
          Go{" "}
          <Link href="/" className="text-blue-400 underline underline-offset-2">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
