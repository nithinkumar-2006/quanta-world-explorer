import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, Atom, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/learn", label: "Learn" },
  { to: "/quiz", label: "Quiz" },
  { to: "/news", label: "News" },
  { to: "/videos", label: "Videos" },
  { to: "/lab", label: "Lab" },
  { to: "/careers", label: "Careers" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem("qw-theme");
    const isDark = stored !== "light";
    setDark(isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("qw-theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <Atom className="h-7 w-7 text-primary animate-spin-slow group-hover:text-secondary transition-colors" />
          <span className="font-display font-bold text-lg tracking-wider neon-text">QUANTA WORLD</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-primary bg-primary/10 shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/10 px-4 py-3 flex flex-col gap-1 animate-fade-in">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-white/5"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
