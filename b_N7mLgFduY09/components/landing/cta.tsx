import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-primary/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Ready to transform your operations?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
          Join hundreds of enterprises already using TwinMatrix to build 
          intelligent digital twins and drive operational excellence.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="group gap-2">
            Schedule a Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Contact Sales
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          No commitment required. Get a personalized demo in under 30 minutes.
        </p>
      </div>
    </section>
  )
}
