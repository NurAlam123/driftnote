import Logo from "@/components/logo";
import { ThemeToggle } from "@/components/theme/theme-toggler";
import { Button } from "@/components/ui/button";
import User from "@/components/user";
import { createClient } from "@/lib/supabase/server";
import { Pencil } from "lucide-react";
import Link from "next/link";
import AuthLinkButton from "./auth-link-button";

const Navbar = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <nav className="sticky top-0 px-2.5 pt-8 pb-4 border-b-2 border-dashed flex items-center justify-between bg-background z-[99]">
      <Logo />

      <div className="flex items-center gap-2">
        <ThemeToggle />
        {data.user ? (
          <>
            <div>
              <Button asChild>
                <Link href="/trace/create">
                  <Pencil />
                  <span className="ms-0.5 hidden md:inline">Write</span>
                </Link>
              </Button>
            </div>
            <div>
              <User user={data.user} />
            </div>
          </>
        ) : (
          <AuthLinkButton />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
