import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center justify-center">
      <Image src="/icon.png" width={25} height={17} alt="logo" />
      <h1 className="text-xl font-bold">Nexcent</h1>
    </div>
  );
};
export default Logo;
