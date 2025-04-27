export default function FeaturedDetails({
  room,
  brand,
  material,
  height,
  width,
  depth,
  weight,
  warranty,
}) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <h4 className="text-sm font-medium text-gray-500 uppercase">Room</h4>
        <span className="font-medium text-gray-800">{room}</span>
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-500 uppercase">Brand</h4>
        <span className="font-medium text-gray-800">{brand}</span>
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-500 uppercase">
          Material
        </h4>
        <span className="font-medium text-gray-800">{material}</span>
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-500 uppercase">
          Dimensions
        </h4>
        <span className="font-medium text-gray-800">
          {height} cm x {width} cm x {depth} cm
        </span>
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-500 uppercase">Weight</h4>
        <span className="font-medium text-gray-800">{weight} kg</span>
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-500 uppercase">
          Warranty
        </h4>
        <span className="font-medium text-gray-800">{warranty}</span>
      </div>
    </div>
  );
}
