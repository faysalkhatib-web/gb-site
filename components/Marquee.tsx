export function Marquee({
  items,
  className = "",
  textClassName = "",
}: {
  items: string[];
  className?: string;
  textClassName?: string;
}) {
  const loop = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee items-center">
        {loop.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className={`whitespace-nowrap ${textClassName}`}>{item}</span>
            <span className="mx-6 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-50 sm:mx-10" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
