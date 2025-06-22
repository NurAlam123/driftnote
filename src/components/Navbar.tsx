"use client";

import { Pencil } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const isHomePage = path === "/";

  return (
    <nav className="flex justify-between items-center border-b-2 border-foreground [border-style:dashed] py-6 px-4 md:py-12 md:px-6">
      <div className={`${!isHomePage && "flex-1 text-center"}`}>
        <Link
          href="/"
          className="text-4xl md:text-5xl font-bold font-playwrite"
        >
          DriftNote
        </Link>
      </div>
      {isHomePage && (
        <div>
          <Link
            className="border-2 block bg-background hover:bg-white hover:text-black hover:border-gray-400 transition-colors rounded-full p-4"
            href="/blog/write"
          >
            <Pencil className="size-full" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
