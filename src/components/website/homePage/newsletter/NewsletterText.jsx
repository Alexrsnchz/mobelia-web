import { MailboxIcon } from "@/components/icons/Icons.jsx";

export default function NewsletterText() {
  return (
    <>
      <div className="p-3 mb-3 rounded-full bg-stone-300">
        <MailboxIcon className="w-8 h-8 text-gray-800" />
      </div>
      <div className="mb-10 max-w-3xl text-center">
        <h3 className="text-2xl sm:text-4xl font-bold text-gray-800">
          Join Our Newsletter
        </h3>
        <p className="mt-2 text-base sm:text-lg text-gray-700 font-medium">
          Subscribe to get special offers, discounts, enter annual giveaways,
          <br className="hidden sm:block" />
          and receive updates about new products.
        </p>
      </div>
    </>
  );
}
