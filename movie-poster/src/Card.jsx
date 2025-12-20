function Card({ title, status, poster, type, genre, year, rating, duration }) {
  return (
    <div className="w-60 rounded-md overflow-hidden bg-slate-800 relative">
      <div
        className={`absolute uppercase text-sm m-1 font-semibold
        px-1 py-0.5 rounded text-white ${
          status === 'now' ? 'bg-green-600' : 'bg-yellow-600'
        }`}
      >
        {status === 'now' ? 'Playing now' : 'Coming soon'}
      </div>
      <img className="h-[12rem] w-full object-cover" src={poster} alt={title} />

      <div className="p-2">
        <h2 className="text-[13px] font-semibold truncate text-slate-200">
          {title}
        </h2>

        <p className="text-[11px] text-slate-400 mt-[2px]">
          <span>{type}</span> / <span>{genre}</span> • <span>{year}</span>
        </p>

        <div className="flex justify-between items-end mt-1">
          <p className="text-yellow-400 text-[12px] leading-none">
            ★ <span>{rating}</span>
          </p>
          <p className="text-[10px] text-slate-400">{duration}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
