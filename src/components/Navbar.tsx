import { PlusIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-4 my-4 border-b [border-style:dotted] p-4">
      <div>
        <Link href="/" className="text-5xl font-bold">
          Anolog
        </Link>
      </div>
      <div>
        <Link
          className="border block bg-black hover:bg-white hover:text-black transition rounded-full p-2"
          href="/blog/create"
        >
          <PlusIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
