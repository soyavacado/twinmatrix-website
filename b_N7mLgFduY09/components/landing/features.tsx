import { Layers, BarChart3, Shield, RefreshCw } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Multi-Layer Modeling",
    description:
      "Create comprehensive digital replicas with interconnected layers representing physical assets, processes, and data flows.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Process millions of data points per second with our edge-native architecture for instant insights and alerts.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified with end-to-end encryption, role-based access, and comprehensive audit logging.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Sync",
    description:
      "Bidirectional synchronization ensures your digital twin always reflects the current state of operations.",
  },
]

export function Features() {
  return (
    <section id="features" className="bg-secondary/30 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Platform Features
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Built for enterprise demands
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Our platform combines cutting-edge technology with enterprise-grade reliability 
            to deliver digital twin solutions that scale.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex gap-5 rounded-lg border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 overflow-hidden rounded-xl border border-border bg-card">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="mb-2 text-sm font-medium text-primary">Platform Demo</p>
              <h3 className="text-2xl font-bold md:text-3xl">
                See TwinMatrix in action
              </h3>
              <p className="mt-4 text-muted-foreground">
                Watch how leading enterprises use TwinMatrix to transform their operations 
                with intelligent digital twins.
              </p>
              <button className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
                Watch the demo
                <span className="ml-2">→</span>
              </button>
            </div>
            <div className="flex items-center justify-center bg-secondary/50 p-8 md:p-12">
              <div className="flex h-48 w-full items-center justify-center rounded-lg border border-dashed border-border text-muted-foreground">
                Demo Video Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
