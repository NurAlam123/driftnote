import { PlusIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-4 my-4 border-b [border-style:dotted] p-4">
      <div>
        <h2 className="text-xl font-bold">Blog</h2>
      </div>
      <div>
        <div className="bg-gray-900 rounded-full p-2">
          <Link href="/blog/create">
            <PlusIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
