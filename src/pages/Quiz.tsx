import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { quizzes, Question } from "@/data/quizzes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";

type Level = "Beginner" | "Intermediate" | "Advanced";
const levels: Level[] = ["Beginner", "Intermediate", "Advanced"];

const STORAGE = "qw-quiz-progress";

type Progress = Record<Level, { best: number; attempts: number }>;

const loadProgress = (): Progress => {
  try {
    const raw = localStorage.getItem(STORAGE);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { Beginner: { best: 0, attempts: 0 }, Intermediate: { best: 0, attempts: 0 }, Advanced: { best: 0, attempts: 0 } };
};

const QuizRunner = ({ level, questions, onFinish }: { level: Level; questions: Question[]; onFinish: (score: number) => void }) => {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[idx];

  const next = () => {
    if (picked === null) return;
    const correct = picked === q.answer;
    const newScore = score + (correct ? 1 : 0);
    if (idx + 1 >= questions.length) {
      setScore(newScore);
      setDone(true);
      onFinish(newScore);
    } else {
      setScore(newScore);
      setIdx(idx + 1);
      setPicked(null);
    }
  };

  const reset = () => { setIdx(0); setPicked(null); setScore(0); setDone(false); };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="glass rounded-2xl p-8 text-center animate-fade-in-up">
        <Trophy className="h-12 w-12 text-secondary mx-auto mb-4" />
        <h3 className="font-display text-3xl mb-2">Score: {score} / {questions.length}</h3>
        <p className="text-muted-foreground mb-6">{pct >= 80 ? "Quantum master!" : pct >= 50 ? "Solid grasp — keep going." : "Revisit the Learn section."}</p>
        <Button onClick={reset} className="bg-gradient-primary"><RotateCcw className="mr-2 h-4 w-4" /> Retry</Button>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-6 md:p-8">
      <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
        <span>Question {idx + 1} / {questions.length}</span>
        <span>{level}</span>
      </div>
      <Progress value={((idx) / questions.length) * 100} className="mb-6" />

      <h3 className="font-display text-xl md:text-2xl mb-6">{q.q}</h3>
      <div className="space-y-3 mb-6">
        {q.options.map((opt, i) => {
          const showResult = picked !== null;
          const isCorrect = i === q.answer;
          const isPicked = i === picked;
          return (
            <button
              key={i}
              onClick={() => picked === null && setPicked(i)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                showResult
                  ? isCorrect
                    ? "border-green-400/60 bg-green-400/10"
                    : isPicked
                    ? "border-destructive/60 bg-destructive/10"
                    : "border-white/10 opacity-60"
                  : "border-white/10 hover:border-primary/40 hover:bg-primary/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{opt}</span>
                {showResult && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-400" />}
                {showResult && isPicked && !isCorrect && <XCircle className="h-5 w-5 text-destructive" />}
              </div>
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div className="glass rounded-xl p-4 mb-4 border-primary/30 animate-fade-in">
          <p className="text-sm"><strong className="text-primary">Explanation:</strong> {q.explanation}</p>
        </div>
      )}

      <Button onClick={next} disabled={picked === null} className="bg-gradient-primary w-full">
        {idx + 1 >= questions.length ? "Finish" : "Next"}
      </Button>
    </div>
  );
};

const Quiz = () => {
  const [progress, setProgress] = useState<Progress>(loadProgress);

  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(progress));
  }, [progress]);

  const onFinish = (level: Level, score: number) => {
    setProgress((p) => ({
      ...p,
      [level]: { best: Math.max(p[level].best, score), attempts: p[level].attempts + 1 },
    }));
  };

  const totalBest = useMemo(() => levels.reduce((s, l) => s + progress[l].best, 0), [progress]);
  const totalMax = useMemo(() => levels.reduce((s, l) => s + quizzes[l].length, 0), []);

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <header className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-6xl font-black mb-4">Quantum <span className="neon-text">Quiz</span></h1>
          <p className="text-muted-foreground">Three difficulty levels. Instant feedback. Progress saved locally.</p>
        </header>

        <div className="glass rounded-2xl p-5 max-w-2xl mx-auto mb-10 grid grid-cols-3 gap-4 text-center">
          {levels.map((l) => (
            <div key={l}>
              <div className="text-xs text-muted-foreground mb-1">{l}</div>
              <div className="font-display text-xl text-primary">{progress[l].best}/{quizzes[l].length}</div>
              <div className="text-xs text-muted-foreground">{progress[l].attempts} attempts</div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mb-8">Overall best: <span className="text-secondary font-semibold">{totalBest}/{totalMax}</span></p>

        <Tabs defaultValue="Beginner" className="max-w-2xl mx-auto">
          <TabsList className="glass mx-auto flex w-fit mb-8">
            {levels.map((l) => (
              <TabsTrigger key={l} value={l} className="data-[state=active]:bg-gradient-primary px-6">{l}</TabsTrigger>
            ))}
          </TabsList>
          {levels.map((l) => (
            <TabsContent key={l} value={l}>
              <QuizRunner level={l} questions={quizzes[l]} onFinish={(s) => onFinish(l, s)} />
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </Layout>
  );
};

export default Quiz;
