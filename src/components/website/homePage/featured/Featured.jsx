import FeaturedProduct from "@/components/website/homePage/featured/FeaturedProduct.jsx";

const product = {
  name: "Scandinavian designer chair",
  description:
    "Bring timeless elegance to your space with this scandinavian designer chair. Expertly crafted with clean lines and premium materials, it offers both exceptional comfort and a refined, minimalist aesthetic.",
  room: "Living room",
  brand: "Sköl",
  material: "Spruce wood, cotton fiber",
  height: 40.2,
  width: 56.8,
  depth: 50.4,
  weight: 13.2,
  warranty: "1 year",
};

export default function Featured() {
  return (
    <section id="featured">
      <div className="bg-stone-100 py-6 md:py-12">
        <FeaturedProduct
          name={product.name}
          description={product.description}
          room={product.room}
          brand={product.brand}
          material={product.material}
          height={product.height}
          width={product.width}
          depth={product.depth}
          weight={product.weight}
          warranty={product.warranty}
        />
      </div>
    </section>
  );
}
