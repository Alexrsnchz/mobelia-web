import Navbar from "@/components/navigation/navbar/Navbar.jsx";
import Footer from "@/components/navigation/footer/Footer.jsx";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
