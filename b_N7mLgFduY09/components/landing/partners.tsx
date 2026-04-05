const partners = [
  { name: "Acme Corp" },
  { name: "Globex" },
  { name: "Soylent" },
  { name: "Initech" },
  { name: "Umbrella" },
  { name: "Hooli" },
]

export function Partners() {
  return (
    <section id="partners" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by industry leaders
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-20 items-center justify-center rounded-lg border border-border bg-card/50 px-6 transition-colors hover:bg-card"
            >
              <span className="text-lg font-semibold text-muted-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20 rounded-xl border border-border bg-card p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="text-xl font-medium leading-relaxed md:text-2xl">
              {`"TwinMatrix transformed how we manage our manufacturing operations. 
              We've reduced downtime by 40% and improved overall efficiency significantly."`}
            </blockquote>
            <div className="mt-8">
              <div className="text-foreground">Sarah Chen</div>
              <div className="text-sm text-muted-foreground">
                VP of Operations, Acme Manufacturing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
