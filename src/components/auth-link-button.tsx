"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { LogInIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const AuthLinkButton = () => {
  const pathname = usePathname();

  return (
    <Button asChild>
      <Link href={pathname === "/" ? "/login" : `/login?redirect=${pathname}`}>
        Login <LogInIcon />
      </Link>
    </Button>
  );
};

export default AuthLinkButton;
