import Image from "next/image"

interface DitherPortraitProps {
  src?: string
  alt?: string
}

export function DitherPortrait({
  src = "/images/celine-dither.png",
  alt = "Celine Goh portrait",
}: DitherPortraitProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-offwhite">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover object-top"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  )
}
