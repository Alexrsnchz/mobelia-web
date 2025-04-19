import testimonials from "@/assets/data/testimonialsData.js";
import TestimonialCard from "@/components/website/homePage/TestimonialCard.jsx";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="flex flex-col justify-center items-center pt-14 pb-16 md:pt-16 md:pb-18 lg:pt-18 lg:pb-20">
        <div className="px-8 md:px-0 max-w-3xl text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800">
            What Our Customers Say
          </h3>
          <p className="mt-2 text-lg md:text-xl text-gray-700 font-medium">
            Don't just take our word for it, hear from our satisfied customers
          </p>
        </div>
        <div className="flex justify-center mt-8 md:mt-12 lg:mt-16 mx-auto md:max-w-2xl lg:max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 px-8 lg:px-12 gap-8 md:gap-12 lg:gap-12 w-full">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
