import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-hero h-[33rem]">
        <Hero />
      </div>
    </div>
  );
};
export default page;
