import { Link } from "react-router-dom";
import { Github, Twitter, Youtube, Linkedin, Atom } from "lucide-react";

const Footer = () => (
  <footer className="mt-24 border-t border-white/10 glass">
    <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 mb-3">
          <Atom className="h-6 w-6 text-primary" />
          <span className="font-display font-bold neon-text">QUANTA WORLD</span>
        </div>
        <p className="text-sm text-muted-foreground max-w-md">
          Your gateway to quantum computing — from the strange beauty of qubits to the algorithms reshaping our future.
        </p>
      </div>
      <div>
        <h4 className="font-display text-sm mb-3 text-foreground">Explore</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/learn" className="hover:text-primary">Learn</Link></li>
          <li><Link to="/quiz" className="hover:text-primary">Quiz</Link></li>
          <li><Link to="/lab" className="hover:text-primary">Lab</Link></li>
          <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display text-sm mb-3 text-foreground">Connect</h4>
        <div className="flex gap-3">
          {[Github, Twitter, Youtube, Linkedin].map((Icon, i) => (
            <a key={i} href="#" aria-label="social" className="p-2 rounded-lg glass glass-hover">
              <Icon className="h-4 w-4 text-primary" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 py-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Quanta World. Built for curious minds.
    </div>
  </footer>
);

export default Footer;
