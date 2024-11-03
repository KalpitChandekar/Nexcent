import Clients from "@/components/Clients";
import Community from "@/components/Community";
import Helping from "@/components/Helping";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PixelGrade from "@/components/PixelGrade";
import Testimonial from "@/components/Testimonial";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-hero h-[33rem] max-w-7xl mx-auto">
        <Hero />
      </div>
      <Clients />
      <Community />
      <PixelGrade />
      <div className="bg-hero max-w-6xl mx-auto">
        <Helping />
      </div>
      <div className="bg-hero max-w-6xl mx-auto">
        <Testimonial />
      </div>
    </div>
  );
};
export default page;
