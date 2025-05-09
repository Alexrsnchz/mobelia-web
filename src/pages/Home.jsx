import MainLayout from "@/components/layouts/MainLayout.jsx";
import Hero from "@/components/website/homePage/hero/Hero.jsx";
import Newsletter from "@/components/website/homePage/newsletter/Newsletter.jsx";
import Testimonials from "@/components/website/homePage/testimonials/Testimonials.jsx";
import Services from "@/components/website/homePage/services/Services.jsx";
import SalesBanner from "@/components/website/homePage/sales/SalesBanner.jsx";
import Arrivals from "@/components/website/homePage/arrivals/Arrivals.jsx";
import Featured from "@/components/website/homePage/featured/Featured.jsx";
import Rooms from "@/components/website/homePage/rooms/Rooms.jsx";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Rooms />
      <Featured />
      <Arrivals />
      <SalesBanner />
      <Services />
      <Testimonials />
      <Newsletter />
    </MainLayout>
  );
}

export default Home;
