import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-16 px-4">
      <div className="flex items-center gap-10 justify-center">
        <div className="space-y-6 w-full">
          <h1 className="text-6xl font-semibold">
            Lessons and insights <br />
            <span className="text-green">from 8 years</span>
          </h1>
          <p className="text-gray text-sm">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="flex gap-2 items-center justify-center bg-green text-white py-2 px-4 rounded-md">
            Register
          </button>
        </div>
        <Image
          src="/hero.png"
          width={1090}
          height={1134}
          alt="hero"
          className="max-w-sm w-full"
        />
      </div>

      <div className="flex items-center justify-center">
        <Image src="/dots.png" width={33} height={8} alt="dots" className="" />
      </div>
    </div>
  );
};
export default Hero;
