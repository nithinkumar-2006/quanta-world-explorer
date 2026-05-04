import Layout from "@/components/Layout";
import { videos } from "@/data/content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const cats = ["Basics", "Algorithms", "Programming", "Careers"] as const;

const Videos = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <header className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-6xl font-black mb-4">Video <span className="neon-text">Library</span></h1>
          <p className="text-muted-foreground">Hand-picked lectures and tutorials from across YouTube.</p>
        </header>

        <Tabs defaultValue="Basics">
          <TabsList className="glass mx-auto flex w-fit mb-10 flex-wrap">
            {cats.map((c) => (
              <TabsTrigger key={c} value={c} className="data-[state=active]:bg-gradient-primary px-6">{c}</TabsTrigger>
            ))}
          </TabsList>
          {cats.map((c) => (
            <TabsContent key={c} value={c} className="grid gap-6 md:grid-cols-2">
              {videos.filter((v) => v.cat === c).map((v) => (
                <div key={v.id} className="glass rounded-2xl p-4 glass-hover">
                  <div className="aspect-video rounded-xl overflow-hidden mb-3 border border-white/10">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <h3 className="font-display text-lg">{v.title}</h3>
                  <span className="text-xs text-secondary uppercase tracking-wider">{v.cat}</span>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </Layout>
  );
};

export default Videos;
