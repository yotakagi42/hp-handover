export function Logo({
  className = "",
  wordClassName = "",
  showTag = true,
}: {
  className?: string;
  wordClassName?: string;
  showTag?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="grid grid-cols-2 gap-[2px] w-5 h-5 shrink-0">
        <i className="block rounded-[2px] bg-cyan1" />
        <i className="block rounded-[2px] bg-lime1" />
        <i className="block rounded-[2px] bg-pink1" />
        <i className="block rounded-[2px] bg-blue1" />
      </span>
      <span className={`font-bold leading-none tracking-wide ${wordClassName}`}>ステピア</span>
      {showTag && (
        <span className="hidden md:inline font-barlow text-[11px] text-ink/50 ml-1 mt-1 tracking-widest">
          DX&nbsp;CONSULTING
        </span>
      )}
    </span>
  );
}
