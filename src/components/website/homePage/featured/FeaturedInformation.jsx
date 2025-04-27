export default function FeaturedInformation({ name, description }) {
  return (
    <div className="mb-10">
      <span className="text-sm md:text-md font-semibold text-gray-400 uppercase">
        Signature collection
      </span>
      <h3 className="mt-2 mb-5 max-w-2xs md:max-w-lg text-2xl sm:text-4xl font-semibold text-gray-800">
        {name}
      </h3>
      <p className="max-w-lg text-base sm:text-lg text-gray-700 font-medium">
        {description}
      </p>
    </div>
  );
}
