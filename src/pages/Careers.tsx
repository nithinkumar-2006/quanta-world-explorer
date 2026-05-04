import Layout from "@/components/Layout";
import { Briefcase, GraduationCap, TrendingUp, DollarSign, Rocket, Code2 } from "lucide-react";

const jobs = [
  { role: "Quantum Software Engineer", salary: "$140k – $220k", desc: "Build SDKs, compilers, and cloud quantum services." },
  { role: "Quantum Research Scientist", salary: "$160k – $280k", desc: "Push algorithmic boundaries — VQE, QML, error correction." },
  { role: "Quantum Hardware Engineer", salary: "$150k – $250k", desc: "Design superconducting / ion-trap / photonic qubits." },
  { role: "Cryogenic / Control Engineer", salary: "$130k – $200k", desc: "Build the dilution fridges and microwave electronics." },
  { role: "Quantum Algorithms Specialist", salary: "$170k – $300k", desc: "Apply quantum to chemistry, finance, and ML." },
  { role: "Quantum Educator / Advocate", salary: "$110k – $170k", desc: "Teach, evangelize, and grow developer ecosystems." },
];

const skills = ["Linear Algebra", "Probability", "Quantum Mechanics", "Python", "Qiskit / Cirq / PennyLane", "Algorithms", "Hardware basics", "Cryptography"];

const roadmap = [
  { stage: "Foundations", items: ["Linear algebra", "Complex numbers", "Probability", "Python"] },
  { stage: "Quantum Basics", items: ["Qubits & gates", "Superposition & entanglement", "Bloch sphere"] },
  { stage: "Programming", items: ["Qiskit", "Cirq / PennyLane", "Run on real hardware"] },
  { stage: "Specialize", items: ["Algorithms (Shor/Grover)", "QML", "Error correction", "Hardware"] },
  { stage: "Build & Apply", items: ["Open-source contributions", "Internships", "Research papers"] },
];

const Careers = () => (
  <Layout>
    <section className="container mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-6xl font-black mb-4">Quantum <span className="neon-text">Careers</span></h1>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          A booming field at the intersection of physics, engineering and computer science. Here's how to get in.
        </p>
      </header>

      {/* Jobs */}
      <h2 className="font-display text-2xl mb-6 flex items-center gap-2"><Briefcase className="h-6 w-6 text-primary" /> In-demand Roles</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {jobs.map((j, i) => (
          <div key={j.role} className="glass glass-hover rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
            <h3 className="font-display text-lg mb-2">{j.role}</h3>
            <p className="text-sm text-secondary flex items-center gap-1 mb-3"><DollarSign className="h-3 w-3" /> {j.salary}</p>
            <p className="text-sm text-muted-foreground">{j.desc}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <h2 className="font-display text-2xl mb-6 flex items-center gap-2"><Code2 className="h-6 w-6 text-primary" /> Core Skills</h2>
      <div className="flex flex-wrap gap-3 mb-16">
        {skills.map((s) => (
          <span key={s} className="glass px-4 py-2 rounded-full text-sm border-primary/30 hover:border-primary/60 transition">{s}</span>
        ))}
      </div>

      {/* Roadmap */}
      <h2 className="font-display text-2xl mb-6 flex items-center gap-2"><GraduationCap className="h-6 w-6 text-primary" /> Learning Roadmap</h2>
      <div className="grid gap-4 md:grid-cols-5 mb-16">
        {roadmap.map((r, i) => (
          <div key={r.stage} className="glass rounded-2xl p-5 relative">
            <div className="absolute -top-3 left-5 px-2 py-0.5 text-xs rounded-full bg-gradient-primary text-primary-foreground font-semibold">Step {i + 1}</div>
            <h3 className="font-display text-base mt-2 mb-3">{r.stage}</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              {r.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Future scope */}
      <div className="glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-display text-3xl mb-4 flex items-center gap-2"><Rocket className="h-7 w-7 text-secondary" /> Future Scope</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The global quantum computing market is projected to exceed <span className="text-primary font-semibold">$125B by 2030</span>.
            Industries from pharma and materials to finance and defense are racing to hire quantum talent.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Early movers — those who learn quantum today — will architect the algorithms, hardware, and businesses of tomorrow's
            quantum-powered economy.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { v: "$125B", l: "Market by 2030" },
            { v: "10×", l: "Job growth (5y)" },
            { v: "350k+", l: "Roles by 2030" },
            { v: "1M+", l: "Logical qubits goal" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-xl p-5 text-center">
              <TrendingUp className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl neon-text">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Careers;
