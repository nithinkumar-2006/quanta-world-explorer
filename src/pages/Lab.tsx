import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { facts } from "@/data/content";
import { Sparkles, Zap } from "lucide-react";

const BlochSphere = ({ theta, phi }: { theta: number; phi: number }) => {
  // theta in degrees from north pole
  const r = 110;
  const cx = 150, cy = 150;
  const t = (theta * Math.PI) / 180;
  const p = (phi * Math.PI) / 180;
  // project 3D -> 2D (simple isometric-ish: x = sinθcosφ, y = -cosθ + slight z tilt)
  const x = Math.sin(t) * Math.cos(p);
  const y = Math.sin(t) * Math.sin(p);
  const z = Math.cos(t);
  // rotate slightly for perspective
  const px = cx + r * x;
  const py = cy - r * (z * 0.85 + y * 0.25);

  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-sm mx-auto">
      <defs>
        <radialGradient id="sphereGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="hsl(199 100% 70% / 0.5)" />
          <stop offset="70%" stopColor="hsl(280 100% 40% / 0.15)" />
          <stop offset="100%" stopColor="hsl(240 30% 4% / 0.8)" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="url(#sphereGrad)" stroke="hsl(199 100% 60% / 0.6)" strokeWidth="1.2" />
      <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.3} fill="none" stroke="hsl(199 100% 60% / 0.3)" />
      <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke="hsl(280 100% 65% / 0.35)" />
      <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke="hsl(280 100% 65% / 0.35)" />
      <text x={cx + 6} y={cy - r - 4} fill="hsl(199 100% 70%)" fontSize="12">|0⟩</text>
      <text x={cx + 6} y={cy + r + 14} fill="hsl(280 100% 70%)" fontSize="12">|1⟩</text>

      {/* state vector */}
      <line x1={cx} y1={cy} x2={px} y2={py} stroke="hsl(199 100% 65%)" strokeWidth="2" />
      <circle cx={px} cy={py} r="5" fill="hsl(280 100% 70%)">
        <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

const Lab = () => {
  const [theta, setTheta] = useState(45);
  const [phi, setPhi] = useState(30);
  const [bit, setBit] = useState(0); // 0..100, prob of |1⟩
  const [fact, setFact] = useState(facts[0]);

  const prob1 = bit / 100;
  const measured = useMemo(() => {
    const trials = 100;
    let ones = 0;
    for (let i = 0; i < trials; i++) if (Math.random() < prob1) ones++;
    return ones;
  }, [prob1]);

  const newFact = () => {
    let f = facts[Math.floor(Math.random() * facts.length)];
    if (f === fact) f = facts[(facts.indexOf(f) + 1) % facts.length];
    setFact(f);
  };

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-6xl font-black mb-4">Quantum <span className="neon-text">Lab</span></h1>
          <p className="text-muted-foreground">Play with mini interactive simulators.</p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Bloch sphere */}
          <div className="glass rounded-2xl p-6">
            <h2 className="font-display text-2xl mb-4">Bloch Sphere Visualizer</h2>
            <BlochSphere theta={theta} phi={phi} />
            <div className="space-y-4 mt-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 flex justify-between">
                  <span>θ (polar) </span><span className="text-primary">{theta}°</span>
                </label>
                <Slider value={[theta]} max={180} onValueChange={(v) => setTheta(v[0])} />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 flex justify-between">
                  <span>φ (azimuth)</span><span className="text-primary">{phi}°</span>
                </label>
                <Slider value={[phi]} max={360} onValueChange={(v) => setPhi(v[0])} />
              </div>
              <p className="text-xs text-muted-foreground">
                State: cos(θ/2)|0⟩ + e<sup>iφ</sup>sin(θ/2)|1⟩
              </p>
            </div>
          </div>

          {/* Qubit slider */}
          <div className="glass rounded-2xl p-6">
            <h2 className="font-display text-2xl mb-4">Qubit 0 ↔ 1 Simulator</h2>
            <div className="text-center py-8">
              <div className="font-display text-5xl mb-3">
                <span style={{ opacity: 1 - prob1 }} className="text-primary">|0⟩</span>
                <span className="mx-3 text-muted-foreground">+</span>
                <span style={{ opacity: prob1 }} className="text-secondary">|1⟩</span>
              </div>
              <p className="text-sm text-muted-foreground">
                P(0) = {(1 - prob1).toFixed(2)} · P(1) = {prob1.toFixed(2)}
              </p>
            </div>
            <Slider value={[bit]} max={100} onValueChange={(v) => setBit(v[0])} />
            <div className="mt-6 glass rounded-xl p-4 border-primary/30">
              <div className="flex items-center gap-2 mb-2 text-primary text-sm"><Zap className="h-4 w-4" /> 100 measurements</div>
              <p className="text-sm text-muted-foreground">|0⟩: {100 - measured} · |1⟩: {measured}</p>
            </div>
          </div>

          {/* Random fact */}
          <div className="glass rounded-2xl p-6 lg:col-span-2">
            <h2 className="font-display text-2xl mb-4">Random Quantum Fact</h2>
            <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">"{fact}"</p>
            <Button onClick={newFact} className="bg-gradient-primary">
              <Sparkles className="mr-2 h-4 w-4" /> Generate another
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lab;
