import Clients from "@/components/Clients";
import Community from "@/components/Community";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PixelGrade from "@/components/PixelGrade";
import Testimonial from "@/components/Testimonial";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-hero h-[33rem]">
        <Hero />
      </div>
      <Clients />
      <Community />
      <PixelGrade />
      <div className="bg-hero">
        <Testimonial />
      </div>
    </div>
  );
};
export default page;
