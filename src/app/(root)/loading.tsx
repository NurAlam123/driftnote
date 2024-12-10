import { Coffee } from "lucide-react";

export default function Loading() {
  return (
    <div className="absolute inset-0 bg-background text-foreground h-svh flex gap-6 items-center justify-center w-full flex-col">
      <div className="size-64 bg-blue-400 rounded-full animate-bounce flex justify-center items-center">
        <Coffee className="size-full p-12 text-white" />
      </div>
      <p className="text-2xl font-bold text-center text-foreground flex items-center gap-2">
        Hold your coffee <Coffee />
      </p>
    </div>
  );
}
