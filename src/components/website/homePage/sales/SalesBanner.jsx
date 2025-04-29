import HomePage_salesBanner from "@/assets/images/homePage/sales/salesBanner.webp";
import SalesContent from "@/components/website/homePage/sales/SalesContent.jsx";

export default function SalesBanner() {
  return (
    <section id="sales">
      <div className="py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 mx-auto max-w-8xl">
        <div
          style={{
            backgroundImage: `url(${HomePage_salesBanner})`,
          }}
          className="overflow-hidden relative h-60 w-full md:rounded-2xl bg-center bg-cover shadow-lg"
        >
          <SalesContent />
        </div>
      </div>
    </section>
  );
}
