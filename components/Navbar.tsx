import { Menu, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto my-4 flex justify-between items-center px-4">
      <Image
        src="/logo.png"
        width={431}
        height={67}
        alt="logo"
        className="w-32 hidden md:block"
      />
      <Image
        src="/icon.png"
        width={98}
        height={67}
        alt="logo"
        className="w-8
         md:hidden"
      />

      <div className="flex md:space-x-6 font-semibold">
        <ul className="md:flex hidden space-x-6 items-center justify-center">
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
        <button className="md:flex hidden gap-2 items-center justify-center bg-green text-white py-2 px-4 rounded-md">
          Register Now
          <MoveRight size={16} />
        </button>
        <Menu className="text-green block md:hidden"/>
      </div>
    </div>
  );
};
export default Navbar;
