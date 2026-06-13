import { DitherPortrait } from "@/components/dither-portrait"
import { LandingContent } from "@/components/landing-content"

export function Landing() {
  return (
    <div className="min-h-screen bg-offwhite text-offblack">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative min-h-[45vh] min-w-0 lg:min-h-screen">
          <DitherPortrait />
        </div>
        <div className="flex min-h-0 min-w-0 flex-col lg:min-h-screen">
          <LandingContent />
        </div>
      </div>
    </div>
  )
}
