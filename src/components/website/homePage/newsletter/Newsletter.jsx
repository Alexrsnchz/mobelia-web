import NewsletterText from "@/components/website/homePage/newsletter/NewsletterText.jsx";
import NewsletterLegal from "@/components/website/homePage/newsletter/NewsletterLegal.jsx";

export default function Newsletter() {
  return (
    <section id="newsletter">
      <div className="flex flex-col items-center bg-stone-100 py-12 px-4">
        <NewsletterText />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-2xl">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 w-full rounded-md border-2 border-stone-400 bg-white placeholder-gray-500 text-gray-800"
          />
          <button className="px-6 py-3 w-full sm:w-auto rounded-md cursor-pointer bg-stone-800 text-white font-medium hover:bg-stone-700 transition-colors duration-200 ease-in-out">
            Subscribe
          </button>
        </div>

        <NewsletterLegal />
      </div>
    </section>
  );
}
