import Hero_background from "@/assets/images/Hero_background.webp";

function Hero() {
  return (
    <section>
      <div className="relative mx-12">
        <img
          src={Hero_background}
          alt="Hero section image"
          className="w-full h-auto max-h-[600px] object-cover rounded-3xl"
        />

        <div className="absolute inset-0 rounded-3xl bg-black/30"></div>
      </div>
    </section>
  );
}

export default Hero;
