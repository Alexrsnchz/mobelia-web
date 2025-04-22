import MainLayout from "@/components/layouts/MainLayout.jsx";
import Hero from "@/components/website/homePage/Hero.jsx";
import Newsletter from "@/components/website/homePage/Newsletter.jsx";
import Testimonials from "@/components/website/homePage/Testimonials.jsx";
import Services from "@/components/website/homePage/Services.jsx";
import SalesBanner from "@/components/website/homePage/SalesBanner.jsx";
import Arrivals from "@/components/website/homePage/Arrivals.jsx";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <section className="min-h-screen"></section>
      <Arrivals />
      <SalesBanner />
      <Services />
      <Testimonials />
      <Newsletter />
    </MainLayout>
  );
}

export default Home;
