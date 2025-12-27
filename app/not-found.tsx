import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="font-script text-6xl md:text-8xl mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">Page not found</p>
      <Link href="/" className="text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors">
        ← Back to Home
      </Link>
    </main>
  )
}
