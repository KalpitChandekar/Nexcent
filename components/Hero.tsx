import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-16 pt-16">
      <div className="flex items-center justify-between">
        <div className="space-y-6">
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
        <div className="">
          <Image
            src="/hero.png"
            width={274}
            height={284}
            alt="hero"
            className="w-[22rem]"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image src="/dots.png" width={33} height={8} alt="dots" className="" />
      </div>
    </div>
  );
};
export default Hero;
