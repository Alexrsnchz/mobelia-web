import Hero_background from "@/assets/images/Hero_background.webp";

function PreviousHero() {
  return (
    <section>
      <div className="relative md:mx-8 lg:mx-12">
        <img
          src={Hero_background}
          alt="Hero section image"
          className="w-full h-auto max-h-[200px] md:max-h-[400px] lg:max-h-[600px] object-cover md:rounded-3xl"
        />

        <div className="absolute inset-0 md:rounded-3xl bg-black/30"></div>
      </div>
    </section>
  );
}

export default PreviousHero;
