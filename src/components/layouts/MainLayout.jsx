import Navbar from "@/components/navigation/Navbar.jsx";
import Footer from "@/components/navigation/Footer.jsx";

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
