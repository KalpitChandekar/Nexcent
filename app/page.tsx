import Clients from "@/components/Clients";
import Community from "@/components/Community";
import Demo from "@/components/Demo";
import Design from "@/components/Design";
import Footer from "@/components/Footer";
import Helping from "@/components/Helping";
import Hero from "@/components/Hero";
import Marketing from "@/components/Marketing";
import Navbar from "@/components/Navbar";
import PixelGrade from "@/components/PixelGrade";
import Testimonial from "@/components/Testimonial";

const page = () => {
  return (
    <main>
      <Navbar />
      <section className="bg-hero md:py-16 py-10">
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
      <Marketing />
      <Demo />
      <section className="bg-footer">
        <Footer />
      </section>
    </main>
  );
};
export default page;
