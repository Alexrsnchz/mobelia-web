import MainLayout from "@/components/layouts/MainLayout.jsx";
import Hero from "@/components/website/homePage/Hero.jsx";
import Newsletter from "@/components/website/homePage/Newsletter.jsx";
import Testimonials from "@/components/website/homePage/Testimonials.jsx";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <section className="min-h-screen"></section>
      <Testimonials />
      <Newsletter />
    </MainLayout>
  );
}

export default Home;
