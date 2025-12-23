import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Work } from "@/components/work"
import { About } from "@/components/about"
import { Capabilities } from "@/components/capabilities"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Capabilities />
      </main>
      <Footer />
    </div>
  )
}
