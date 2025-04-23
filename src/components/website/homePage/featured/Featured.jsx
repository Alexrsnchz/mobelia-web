import FeaturedProduct from "@/components/website/homePage/featured/FeaturedProduct.jsx";

const product = {
  category: "Living room",
  name: "Crochet pattern pouf",
  description:
    "Add a cozy, handmade touch to your space with this stylish Crochet Pattern Pouf. Crafted with soft, durable materials, it offers both comfort and charm—perfect as a footrest or a decorative accent.",
  height: 40.2,
  width: 56.8,
  depth: 50.4,
  material: "cotton yarn",
};

export default function Featured() {
  return (
    <section id="featured">
      <div className="bg-stone-200 h-150 py-12">
        <FeaturedProduct
          category={product.category}
          name={product.name}
          description={product.description}
          height={product.height}
          width={product.width}
          depth={product.depth}
          material={product.material}
        />
      </div>
    </section>
  );
}
