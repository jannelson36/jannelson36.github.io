import Hero from '@/components/sections/Hero'
import Navigation from '@/components/ui/Navigation'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen">
      <ThemeToggle />
      <Navigation />
      <Hero />
      {/* Add other sections here */}
    </main>
  )
}