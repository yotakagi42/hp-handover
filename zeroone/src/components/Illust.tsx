type IllustProps = {
  /** file name (without extension) under /public/illust */
  name: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

/** Renders a bundled free flat illustration from /illust. */
export default function Illust({
  name,
  alt,
  className = '',
  loading = 'lazy',
}: IllustProps) {
  return (
    <img
      src={`/illust/${name}.svg`}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      draggable={false}
    />
  )
}
