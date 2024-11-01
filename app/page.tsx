import Clients from "@/components/Clients";
import Community from "@/components/Community";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-hero h-[33rem]">
        <Hero />
      </div>
      <Clients />
      <Community />
    </div>
  );
};
export default page;
