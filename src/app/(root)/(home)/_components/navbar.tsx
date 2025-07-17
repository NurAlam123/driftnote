import Logo from "@/components/logo";
import { ThemeToggle } from "@/components/theme/theme-toggler";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-2.5 pt-8 pb-4 border-b-2 border-dashed flex items-center justify-between">
      <Logo />

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <div>
          <Button asChild>
            <Link href="/note/write">
              <Pencil />
              <span className="ms-1">Write</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
