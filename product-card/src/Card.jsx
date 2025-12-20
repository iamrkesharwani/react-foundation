function Card({ name, description, price, rating, ratingCount, image, badge }) {
  function getStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return (
      <>
        {'★'.repeat(full)}
        {half && '☆'}
        {'☆'.repeat(empty)}
      </>
    );
  }

  return (
    <div className="w-64 overflow-hidden rounded-md bg-slate-100 relative">
      {badge && (
        <span
          className={`absolute top-2 left-2 text-[10px] text-white px-2 py-[2px]
          rounded-md font-semibold ${
            badge === 'sale' ? 'bg-red-500' : 'bg-green-500'
          }`}
        >
          {badge === 'sale' ? 'ON SALE' : 'NEW'}
        </span>
      )}
      <img className="h-36 w-full object-cover" src={image} alt={name} />
      <div className="p-2">
        <h1 className="text-sm font-semibold">{name}</h1>
        <p className="mt-1 text-xs text-slate-600 leading-tight">
          {description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <h1 className="text-sm font-bold">
            ₹{price.toLocaleString('en-IN')}
          </h1>
          <div className="flex flex-col items-end text-right text-xs">
            <p className="text-yellow-500">{getStars(rating)}</p>
            <p className="text-[10px] text-slate-500">{ratingCount} ratings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
