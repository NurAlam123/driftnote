import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-svh flex justify-center items-center">
      <div>
        <div className="flex gap-2 items-center">
          <Ghost className="size-32" />
          <div className="flex flex-col">
            <span className="text-2xl font-medium">BOOOOOOOOOO!!!</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-medium">404</span>
              <span className="text-xl">|</span>
              <span className="text-xl"> Not Found</span>
            </div>
            <Button variant="outline" className="mt-2" asChild>
              <Link href="/">Go Back</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
