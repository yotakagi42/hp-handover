type LogoProps = {
  className?: string
}

/**
 * Zeroone のロゴマーク。ポップグラデーションの角丸バッジに白の「01」で
 * 社名の由来「0から1を生み出す」を表す。配色は固定（currentColor 非依存）。
 */
export default function Logo({ className = 'h-8 w-8' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="zeroone-badge" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF5DA2" />
          <stop offset="0.5" stopColor="#8A5CF6" />
          <stop offset="1" stopColor="#3B6CF5" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="18" fill="url(#zeroone-badge)" />
      {/* 0 */}
      <circle cx="26" cy="35" r="10" stroke="#fff" strokeWidth="7" />
      {/* 1 — 0 より背が高く、「0 から伸びていく」形 */}
      <rect x="42" y="17" width="7" height="30" rx="3.5" fill="#fff" />
    </svg>
  )
}
