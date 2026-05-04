import Layout from "@/components/Layout";
import { roadmap } from "@/data/roadmap";
import { Atom, Lightbulb, ListChecks } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Learn = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
            The <span className="neon-text">Quantum Roadmap</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A guided path from your first qubit to advanced algorithms, error correction, and real hardware.
          </p>
        </header>

        <Tabs defaultValue="Beginner" className="w-full">
          <TabsList className="glass mx-auto flex w-fit mb-10">
            {roadmap.map((r) => (
              <TabsTrigger key={r.level} value={r.level} className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground px-6">
                {r.level}
              </TabsTrigger>
            ))}
          </TabsList>

          {roadmap.map((r) => (
            <TabsContent key={r.level} value={r.level} className="space-y-6">
              {r.topics.map((t, i) => (
                <article key={t.id} className="glass rounded-2xl p-6 md:p-8 animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-primary/10 border border-primary/30 shrink-0">
                      <Atom className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-secondary">{r.level}</span>
                      <h2 className="font-display text-2xl md:text-3xl mt-1">{t.title}</h2>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-5">{t.summary}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4 border-secondary/20">
                      <div className="flex items-center gap-2 mb-2 text-secondary">
                        <Lightbulb className="h-4 w-4" />
                        <span className="text-sm font-semibold">Real-World Analogy</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{t.analogy}</p>
                    </div>
                    <div className="glass rounded-xl p-4 border-primary/20">
                      <div className="flex items-center gap-2 mb-2 text-primary">
                        <ListChecks className="h-4 w-4" />
                        <span className="text-sm font-semibold">Key Points</span>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        {t.keyPoints.map((k) => <li key={k}>{k}</li>)}
                      </ul>
                    </div>
                  </div>

                  {/* Diagram placeholder */}
                  <div className="mt-5 h-32 rounded-xl border border-dashed border-primary/30 flex items-center justify-center text-xs text-muted-foreground bg-primary/5">
                    [ Diagram / Illustration: {t.title} ]
                  </div>
                </article>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </Layout>
  );
};

export default Learn;
