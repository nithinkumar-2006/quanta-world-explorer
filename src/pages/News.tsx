import { useState } from "react";
import Layout from "@/components/Layout";
import { newsItems } from "@/data/content";
import { Button } from "@/components/ui/button";
import { RefreshCw, Calendar, ExternalLink } from "lucide-react";

const News = () => {
  const [items, setItems] = useState(newsItems);
  const [loading, setLoading] = useState(false);

  const refresh = () => {
    setLoading(true);
    setTimeout(() => {
      setItems([...newsItems].sort(() => Math.random() - 0.5));
      setLoading(false);
    }, 700);
  };

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h1 className="font-display text-4xl md:text-6xl font-black mb-2">
              Live <span className="neon-text">Quantum News</span>
            </h1>
            <p className="text-muted-foreground">Curated breakthroughs from labs around the world.</p>
          </div>
          <Button onClick={refresh} disabled={loading} className="bg-gradient-primary">
            <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            {loading ? "Refreshing…" : "Refresh feed"}
          </Button>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((n, i) => (
            <article key={n.title} className="glass glass-hover rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.04}s` }}>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar className="h-3 w-3" />
                <time>{new Date(n.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}</time>
                <span className="text-secondary">• {n.source}</span>
              </div>
              <h2 className="font-display text-lg mb-3 leading-snug">{n.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{n.excerpt}</p>
              <a href="#" className="text-primary text-sm inline-flex items-center gap-1 hover:underline">
                Read more <ExternalLink className="h-3 w-3" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default News;
