"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Download, Lightbulb, ListChecks, PenLine, RotateCcw, Sparkles } from "lucide-react";

const STORAGE_KEY = "brightrise-learning-journal-draft";
const today = () => new Date().toISOString().slice(0, 10);
const newEntry = () => ({ date: today(), topic: "", timeSpent: "", learned: "", confidence: null, questions: "", actionSteps: ["", "", ""] });

function FieldLabel({ children, hint }) {
  return <div className="journal-field-label"><strong>{children}</strong>{hint && <span>{hint}</span>}</div>;
}

export default function LearningJournal() {
  const [entry, setEntry] = useState(newEntry);
  const [ready, setReady] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try { const draft = localStorage.getItem(STORAGE_KEY); if (draft) setEntry({ ...newEntry(), ...JSON.parse(draft) }); } catch { /* A fresh journal remains available when browser storage is unavailable. */ }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
      setSaved(true);
      const timer = window.setTimeout(() => setSaved(false), 1800);
      return () => window.clearTimeout(timer);
    } catch { return undefined; }
  }, [entry, ready]);

  const completed = useMemo(() => [entry.topic, entry.timeSpent, entry.learned, entry.confidence, entry.questions, ...entry.actionSteps].filter(Boolean).length, [entry]);
  const update = (field, value) => setEntry((current) => ({ ...current, [field]: value }));
  const updateAction = (index, value) => setEntry((current) => ({ ...current, actionSteps: current.actionSteps.map((step, stepIndex) => stepIndex === index ? value : step) }));
  const startFresh = () => { setEntry(newEntry()); try { localStorage.removeItem(STORAGE_KEY); } catch { /* State still resets for this browser session. */ } };

  return <section className="journal-tool-section section-space"><div className="container-page">
    <div className="journal-tool-heading"><div><p className="eyebrow"><Sparkles size={13} /> MAKE LEARNING STICK</p><h2>One small reflection.<br /><span className="serif-accent">A stronger tomorrow.</span></h2></div><p>Use this little space after a lesson to celebrate progress, spot questions, and choose what comes next.</p></div>
    <div className="journal-actions" aria-label="Journal actions"><span className={saved ? "journal-save-state saved" : "journal-save-state"}>{saved ? <><Check size={15} /> Saved on this device</> : "Your journal stays private"}</span><div><button type="button" className="journal-reset" onClick={startFresh}><RotateCcw size={15} /> Start fresh</button><button type="button" className="button button-dark" onClick={() => window.print()}><Download size={17} /> Download PDF</button></div></div>

    <article className="learning-journal-sheet" aria-labelledby="daily-journal-title">
      <header className="journal-sheet-header"><div><span>DAILY ENTRY</span><h1 id="daily-journal-title">Learning <em>journal</em></h1></div><PenLine size={34} strokeWidth={1.4} aria-hidden="true" /></header>
      <div className="journal-meta-grid"><label><FieldLabel>Date</FieldLabel><input type="date" value={entry.date} onChange={(event) => update("date", event.target.value)} /></label><label><FieldLabel hint="How long did you study?">Time spent</FieldLabel><select value={entry.timeSpent} onChange={(event) => update("timeSpent", event.target.value)}><option value="">Choose a time</option><option>15 minutes</option><option>30 minutes</option><option>45 minutes</option><option>1 hour</option><option>More than 1 hour</option></select></label></div>
      <label className="journal-entry-field topic-field"><FieldLabel hint="What subject, skill, or concept did you study today?">Topic</FieldLabel><input value={entry.topic} onChange={(event) => update("topic", event.target.value)} placeholder="e.g. Fractions, reading comprehension, the solar system…" maxLength={120} /></label>
      <label className="journal-entry-field"><FieldLabel hint="What useful idea, lesson, or insight did this session teach you?">What I learned</FieldLabel><textarea value={entry.learned} onChange={(event) => update("learned", event.target.value)} placeholder="Today I discovered that…" rows={4} maxLength={800} /></label>
      <section className="journal-confidence" aria-labelledby="confidence-label"><FieldLabel hint="How well do you understand this today?">Confidence level</FieldLabel><div className="confidence-row" role="group" aria-labelledby="confidence-label"><span id="confidence-label">Still learning</span><div>{Array.from({ length: 10 }, (_, index) => { const value = index + 1; return <button key={value} type="button" aria-label={`${value} out of 10 confidence`} aria-pressed={entry.confidence === value} className={entry.confidence === value ? "selected" : ""} onClick={() => update("confidence", value)}>{value}</button>; })}</div><span>Feeling confident</span></div></section>
      <label className="journal-entry-field compact-field"><FieldLabel hint="What are you still curious about?">Questions</FieldLabel><textarea value={entry.questions} onChange={(event) => update("questions", event.target.value)} placeholder="I still wonder…" rows={2} maxLength={500} /></label>
      <section className="journal-action-steps" aria-labelledby="action-steps-label"><FieldLabel hint="Three small things you can do next.">Action steps</FieldLabel><div id="action-steps-label">{entry.actionSteps.map((step, index) => <label key={index}><span>{index + 1}</span><input value={step} onChange={(event) => updateAction(index, event.target.value)} placeholder={index === 0 ? "Review one key idea" : index === 1 ? "Try one practice question" : "Ask for help if needed"} maxLength={160} /></label>)}</div></section>
      <footer className="journal-sheet-footer"><span><Lightbulb size={14} /> Progress grows from small, honest reflections.</span><span>{completed}/8 reflections added</span></footer>
    </article>
    <div className="journal-download-note"><ListChecks size={18} /><p><strong>Ready to keep it?</strong> Download opens your device’s print dialog—choose <em>Save as PDF</em> to keep or share a completed journal page.</p></div>
  </div></section>;
}
