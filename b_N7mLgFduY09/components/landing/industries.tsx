import { Factory, Building2, Zap, Ship, Cpu, Stethoscope } from "lucide-react"

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimize production lines with real-time monitoring and predictive maintenance capabilities.",
  },
  {
    icon: Building2,
    title: "Smart Cities",
    description: "Model urban infrastructure for better resource management and citizen services.",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Transform grid operations with intelligent asset monitoring and demand forecasting.",
  },
  {
    icon: Ship,
    title: "Logistics",
    description: "Streamline supply chains with end-to-end visibility and scenario planning.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "Accelerate product development with virtual prototyping and testing environments.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Improve patient outcomes through facility optimization and resource allocation.",
  },
]

export function Industries() {
  return (
    <section id="industries" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            What we do
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Industry solutions built for scale
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Our technology spans various needs at every stage of the digital transformation process.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <industry.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{industry.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
              <button className="mt-4 text-sm text-primary transition-colors hover:text-primary/80">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
