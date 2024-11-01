import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto mt-6 flex justify-between items-center">
      <Image
        src="/logo.png"
        width={108}
        height={17}
        alt="logo"
        className="w-32"
      />

      <div className="flex space-x-6 font-semibold">
        <ul className="flex space-x-6 items-center justify-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Feature</Link>
          </li>
          <li>
            <Link href="/contact">Community</Link>
          </li>
          <li>
            <Link href="/contact">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Pricing</Link>
          </li>
        </ul>
        <button className="flex gap-2 items-center justify-center bg-green text-white py-2 px-4 rounded-md">
          Register Now
          <MoveRight size={16} />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
