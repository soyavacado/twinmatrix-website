import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.25_0.01_260)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.25_0.01_260)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Teal Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Now available for enterprise
        </div>
        
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Where <span className="text-primary">digital twins</span> meet operational excellence
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          TwinMatrix transforms complex systems into intelligent digital replicas, 
          enabling real-time insights and predictive capabilities across your entire organization.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="group gap-2">
            Request a Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
          {[
            { value: "99.9%", label: "Uptime SLA" },
            { value: "500+", label: "Enterprise Clients" },
            { value: "45%", label: "Cost Reduction" },
            { value: "2.5x", label: "Efficiency Gain" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
