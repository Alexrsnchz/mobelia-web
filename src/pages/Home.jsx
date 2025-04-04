import MainLayout from "@/components/layouts/MainLayout.jsx";
import Hero from "@/components/homePage/Hero.jsx";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <section className="min-h-screen"></section>
    </MainLayout>
  );
}

export default Home;
