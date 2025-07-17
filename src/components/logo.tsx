import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="text-xl md:text-xl font-bold font-playwrite">
        DriftNote
      </Link>
    </div>
  );
};

export default Logo;
