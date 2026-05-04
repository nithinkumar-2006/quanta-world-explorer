import { Link } from "react-router-dom";
import { useState } from "react";
import { BookOpen, Brain, Newspaper, Video, FlaskConical, Briefcase, Search, Sparkles, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const cards = [
  { to: "/learn", icon: BookOpen, title: "Learn", desc: "Roadmap from qubits to Shor's algorithm." },
  { to: "/quiz", icon: Brain, title: "Quiz", desc: "Test your knowledge across 3 levels." },
  { to: "/news", icon: Newspaper, title: "News", desc: "Latest breakthroughs in the quantum world." },
  { to: "/videos", icon: Video, title: "Videos", desc: "Curated YouTube lectures & tutorials." },
  { to: "/lab", icon: FlaskConical, title: "Lab", desc: "Bloch sphere, qubit slider & more." },
  { to: "/careers", icon: Briefcase, title: "Careers", desc: "Jobs, salaries, skills & roadmap." },
];

const Index = () => {
  const [q, setQ] = useState("");
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 -z-10" />
        <div className="container mx-auto px-4 py-20 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">From A to Z</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in-up">
            Welcome to <span className="neon-text">Quantum World</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Step into the universe of qubits, superposition, and entanglement. Learn the technology rewriting the rules of computation — interactively.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="max-w-xl mx-auto flex gap-2 mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search qubits, gates, Shor's algorithm…"
                className="pl-10 h-12 glass border-white/10"
              />
            </div>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
              <Link to={`/learn${q ? `?q=${encodeURIComponent(q)}` : ""}`}>Explore</Link>
            </Button>
          </form>

          <div className="flex gap-3 justify-center flex-wrap animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-gradient-primary shadow-glow">
              <Link to="/learn">Start Learning <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass border-primary/30">
              <Link to="/lab">Try the Lab</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why quantum */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Why Quantum Computing Matters</h2>
          <p className="text-muted-foreground leading-relaxed">
            Quantum computing harnesses the strange laws of physics — superposition, entanglement and interference — to solve problems
            far beyond the reach of even the largest classical supercomputers. From discovering new medicines and materials, to
            breaking and rebuilding cryptography, to powering the next generation of AI: the quantum era will reshape every industry.
          </p>
        </div>
      </section>

      {/* Highlight cards */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-12">Explore the <span className="neon-text">Quantum World</span></h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Link
              key={c.to}
              to={c.to}
              className="glass glass-hover rounded-2xl p-6 group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-primary/10 border border-primary/20 mb-4">
                <c.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-4 text-sm text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Open <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
