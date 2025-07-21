import { cn } from "@/lib/utils";
import Logo from "./logo";

const Loader = ({
  full,
  className,
  loaderSize,
}: {
  className?: string;
  full?: boolean;
  loaderSize?: string;
}) => {
  return (
    <div
      className={cn(
        full && "h-[90vh] flex justify-center items-center overflow-hidden",
        !full && "w-1/2 mx-auto flex justify-center h-fit",
        className,
      )}
    >
      <div className="h-full flex flex-col gap-4 justify-center items-center">
        <Logo />
        <div className={cn("loader w-4 mt-8", loaderSize)}></div>
      </div>
    </div>
  );
};

export default Loader;
