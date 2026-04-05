import {
  Header,
  Hero,
  Industries,
  Features,
  Partners,
  CTA,
  Footer,
} from "@/components/landing"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Industries />
      <Features />
      <Partners />
      <CTA />
      <Footer />
    </main>
  )
}
