import Logo from "@/components/logo";
import { ThemeToggle } from "@/components/theme/theme-toggler";
import { Button } from "@/components/ui/button";

const Navbar = ({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <nav className="sticky top-0 px-2.5 pt-8 pb-4 border-b-2 border-dashed flex items-center justify-between bg-background z-20">
      <Logo />

      <div className="flex items-center gap-2">
        <ThemeToggle />

        <div className="flex justify-end my-2">
          <Button onClick={onClick} disabled={disabled}>
            Booo...
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
