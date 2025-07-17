import Logo from "@/components/logo";
import { ThemeToggle } from "@/components/theme/theme-toggler";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="pt-8 pb-4 border-b-2 border-dashed flex items-center justify-between">
      <Logo />

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div>
          <Button variant="outline">
            <Pencil />
            <span className="ms-1">Write</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
