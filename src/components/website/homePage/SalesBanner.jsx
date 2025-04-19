import HomePage_salesBanner from "@/assets/images/HomePage_salesBanner.webp";
import { Link } from "react-router";

export default function SalesBanner() {
  return (
    <section id="sales">
      <div className="md:px-8 lg:px-12 py-20 mx-auto max-w-8xl">
        <div
          style={{
            backgroundImage: `url(${HomePage_salesBanner})`,
          }}
          className="overflow-hidden relative h-60 w-full md:rounded-2xl bg-center bg-cover shadow-lg"
        >
          <div className="flex flex-col justify-center items-center absolute inset-0 px-4 md:px-0 space-y-8 lg:space-y-10 bg-black/40">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Summer Sales Are Here!
              </h3>
              <p className="mt-2 mx-auto max-w-lg lg:max-w-xl text-md md:text-xl text-medium text-white">
                Special discounts on outdoor furniture to enhance the visual
                appealing of your patio.
              </p>
            </div>
            <Link
              to="/sales"
              className="px-6 py-3 rounded-lg bg-white text-black"
            >
              Go to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
