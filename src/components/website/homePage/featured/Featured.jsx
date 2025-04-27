import FeaturedProduct from "@/components/website/homePage/featured/FeaturedProduct.jsx";

const product = {
  name: "Scandinavian designer chair",
  description:
    "Add a cozy, handmade touch to your space with this stylish Crochet Pattern Pouf. Crafted with soft, durable materials, it offers both comfort and charm as a footrest or a decorative accent.",
  room: "Living room",
  brand: "Sköl",
  material: "Spruce wood, cotton",
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
