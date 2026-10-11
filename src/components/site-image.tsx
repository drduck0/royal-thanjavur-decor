type SiteImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** LCP / above-the-fold image — eager load and high fetch priority. */
  priority?: boolean;
  loading?: "lazy" | "eager";
  sizes?: string;
};

export function SiteImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  loading,
  sizes,
}: SiteImageProps) {
  const loadMode = loading ?? (priority ? "eager" : "lazy");

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loadMode}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      sizes={sizes}
    />
  );
}
