import { Send } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col gap-20 md:gap-0 md:justify-between max-w-6xl mx-auto py-14 px-4">
      <div className="space-y-8">
        <Image
          src="/footer-logo.png"
          alt="logo"
          width={533}
          height={84}
          className="w-48"
        />
        <div className=" text-sm space-y-1 text-[#F5F7FA]">
          <p>Copyright © 2020 Landify UI Kit.</p>
          <p>All rights reserved</p>
        </div>
        <div className="flex gap-4">
          <Image
            src="/twitter.png"
            alt="twitter"
            width={23}
            height={23}
            className="w-7"
          />
          <Image
            src="/dribble.png"
            alt="facebook"
            width={23}
            height={23}
            className="w-7"
          />
          <Image
            src="/instagram.png"
            alt="instagram"
            width={23}
            height={23}
            className="w-7"
          />
          <Image
            src="/youtube.png"
            alt="linkedin"
            width={23}
            height={23}
            className="w-7"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-28 gap-20">
        <div className="flex md:gap-28 gap-10">
          <div className="space-y-8">
            <h1 className="text-2xl text-white font-semibold">Company</h1>
            <div className="space-y-4 flex flex-col text-[#F5F7FA]">
              <a href="">About us</a>

              <a href="">Blog</a>

              <a href="">Contact us</a>

              <a href="">Pricing</a>

              <a href="">Testimonials</a>
            </div>
          </div>
          <div className="space-y-8">
            <h1 className="text-2xl text-white font-semibold">Support</h1>
            <div className="space-y-4 flex flex-col text-[#F5F7FA]">
              <a href="">Help centre</a>

              <a href="">Terms of service</a>

              <a href="">Legal</a>

              <a href="">Privacy policy</a>

              <a href="">Status</a>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h1 className="text-2xl text-white font-semibold">Stay upto date</h1>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="md:w-64 w-full outline-none text-black p-2 rounded-md overflow-hidden"
            />
            <Send className="absolute top-2 right-2  text-black bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
