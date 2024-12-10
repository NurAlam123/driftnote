import { Coffee } from "lucide-react";

export default function Loading() {
  return (
    <div className="bg-background h-svh flex items-center justify-center w-full flex-col">
      <div className="size-64 bg-blue-400 rounded-full animate-bounce flex justify-center items-center">
        <Coffee className="size-full p-12" />
      </div>
      <p className="text-2xl font-bold text-center text-gray-300 flex items-center gap-2">
        Hold your coffee <Coffee />
      </p>
    </div>
  );
}
