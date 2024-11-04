import Clients from "@/components/Clients";
import Community from "@/components/Community";
import Design from "@/components/Design";
import Helping from "@/components/Helping";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PixelGrade from "@/components/PixelGrade";
import Testimonial from "@/components/Testimonial";

const page = () => {
  return (
    <main>
      <Navbar />
      <section className="bg-hero py-16">
        <Hero />
      </section>
      <Clients />
      <Community />
      <PixelGrade />
      <section className="bg-hero">
        <Helping />
      </section>
      <Design />
      <section className="bg-hero my-32">
        <Testimonial />
      </section>
    </main>
  );
};
export default page;
