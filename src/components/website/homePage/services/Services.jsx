import AssemblyService from "@/components/website/homePage/services/AssemblyService.jsx";
import DeliveryService from "@/components/website/homePage/services/DeliveryService.jsx";
import WarrantyService from "@/components/website/homePage/services/WarrantyService.jsx";
import ReturnsService from "@/components/website/homePage/services/ReturnsService.jsx";

export default function Services() {
  return (
    <section id="services">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-stone-100">
        <AssemblyService />
        <DeliveryService />
        <WarrantyService />
        <ReturnsService />
      </div>
    </section>
  );
}
