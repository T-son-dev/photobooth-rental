import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Equipment from "@/components/Equipment";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Equipment />
        <Gallery />
        <Testimonials />
        <Pricing />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
