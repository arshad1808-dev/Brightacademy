"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Clock3, RotateCcw, Sparkles, Trophy, Volume2, VolumeX, X } from "lucide-react";

const QUESTION_COUNT = 10;

const levels = {
  beginner: { label: "Beginner", description: "Friendly first steps" },
  intermediate: { label: "Intermediate", description: "A little more stretch" },
  advanced: { label: "Advanced", description: "Ready for a challenge" },
};

const operations = {
  mixed: "Mixed challenge",
  addition: "Addition",
  subtraction: "Subtraction",
  multiplication: "Multiplication",
  division: "Division",
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeQuestion(level, selectedOperation) {
  const operation = selectedOperation === "mixed"
    ? ["addition", "subtraction", "multiplication", "division"][randomInt(0, 3)]
    : selectedOperation;
  const range = {
    beginner: { add: 20, multiply: 5 },
    intermediate: { add: 75, multiply: 12 },
    advanced: { add: 200, multiply: 20 },
  }[level];
  let first;
  let second;
  let answer;
  let sign;

  if (operation === "addition") {
    first = randomInt(1, range.add);
    second = randomInt(1, range.add);
    answer = first + second;
    sign = "+";
  } else if (operation === "subtraction") {
    first = randomInt(2, range.add * 2);
    second = randomInt(1, first - 1);
    answer = first - second;
    sign = "−";
  } else if (operation === "multiplication") {
    first = randomInt(2, range.multiply);
    second = randomInt(2, range.multiply);
    answer = first * second;
    sign = "×";
  } else {
    second = randomInt(2, range.multiply);
    answer = randomInt(2, range.multiply);
    first = second * answer;
    sign = "÷";
  }

  return { id: `${Date.now()}-${Math.random()}`, text: `${first} ${sign} ${second}`, answer, operation };
}

function ResultMetric({ label, value }) {
  return <div className="math-result-metric"><strong>{value}</strong><span>{label}</span></div>;
}

export default function MentalMathChallenge() {
  const [phase, setPhase] = useState("setup");
  const [level, setLevel] = useState("beginner");
  const [duration, setDuration] = useState(60);
  const [operation, setOperation] = useState("mixed");
  const [question, setQuestion] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const answerRef = useRef(null);
  const deadlineRef = useRef(0);
  const feedbackTimeout = useRef(null);
  const audioContextRef = useRef(null);
  const lastCountdownTickRef = useRef(null);

  const prepareSound = useCallback(async () => {
    if (!soundEnabled || typeof window === "undefined") return null;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;
    if (!audioContextRef.current) audioContextRef.current = new AudioContext();
    if (audioContextRef.current.state === "suspended") await audioContextRef.current.resume();
    return audioContextRef.current;
  }, [soundEnabled]);

  const playFeedbackSound = useCallback((isCorrect) => {
    const context = audioContextRef.current;
    if (!soundEnabled || !context || context.state !== "running") return;
    const now = context.currentTime;
    const notes = isCorrect ? [523.25, 659.25] : [392, 293.66];
    notes.forEach((frequency, index) => {
      const start = now + index * 0.1;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = isCorrect ? "sine" : "square";
      oscillator.frequency.setValueAtTime(frequency, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(isCorrect ? 0.1 : 0.045, start + 0.018);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + (isCorrect ? 0.18 : 0.16));
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(start);
      oscillator.stop(start + (isCorrect ? 0.2 : 0.18));
    });
  }, [soundEnabled]);

  const playCountdownTick = useCallback((seconds) => {
    const context = audioContextRef.current;
    if (!soundEnabled || !context || context.state !== "running") return;
    const start = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(seconds <= 3 ? 760 : 560, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(seconds <= 3 ? 0.07 : 0.045, start + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.07);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.08);
  }, [soundEnabled]);

  const endGame = useCallback(() => {
    window.clearTimeout(feedbackTimeout.current);
    setFeedback(null);
    setPhase("results");
  }, []);

  useEffect(() => () => {
    window.clearTimeout(feedbackTimeout.current);
    audioContextRef.current?.close();
  }, []);

  useEffect(() => {
    if (phase !== "playing") return undefined;
    const update = () => {
      const seconds = Math.max(0, Math.ceil((deadlineRef.current - Date.now()) / 1000));
      setTimeLeft(seconds);
      if (seconds > 0 && seconds <= 10 && lastCountdownTickRef.current !== seconds) {
        lastCountdownTickRef.current = seconds;
        playCountdownTick(seconds);
      }
      if (seconds === 0) endGame();
    };
    update();
    const timer = window.setInterval(update, 200);
    return () => window.clearInterval(timer);
  }, [phase, endGame, playCountdownTick]);

  useEffect(() => {
    if (phase === "playing") answerRef.current?.focus();
  }, [phase, question]);

  const startGame = () => {
    prepareSound();
    window.clearTimeout(feedbackTimeout.current);
    setQuestion(makeQuestion(level, operation));
    setQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setAnswered(0);
    setAnswer("");
    setFeedback(null);
    setTimeLeft(duration);
    lastCountdownTickRef.current = null;
    deadlineRef.current = Date.now() + duration * 1000;
    setPhase("playing");
  };

  const submitAnswer = (event) => {
    event.preventDefault();
    if (feedback || answer.trim() === "") return;
    if (Date.now() >= deadlineRef.current) { endGame(); return; }
    const isCorrect = Number(answer.trim()) === question.answer;
    const completed = questionIndex + 1;
    const nextScore = score + (isCorrect ? 1 : 0);
    const nextStreak = isCorrect ? streak + 1 : 0;

    setScore(nextScore);
    setStreak(nextStreak);
    setBestStreak((value) => Math.max(value, nextStreak));
    setAnswered(completed);
    setFeedback(isCorrect ? "correct" : "incorrect");
    playFeedbackSound(isCorrect);

    feedbackTimeout.current = window.setTimeout(() => {
      if (completed >= QUESTION_COUNT || Date.now() >= deadlineRef.current) {
        endGame();
        return;
      }
      setQuestionIndex(completed);
      setQuestion(makeQuestion(level, operation));
      setAnswer("");
      setFeedback(null);
    }, 650);
  };

  const accuracy = answered ? Math.round((score / answered) * 100) : 0;
  const toggleSound = async () => {
    if (soundEnabled) { setSoundEnabled(false); return; }
    setSoundEnabled(true);
    if (typeof window !== "undefined") {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioContextRef.current) audioContextRef.current = new AudioContext();
      if (audioContextRef.current.state === "suspended") await audioContextRef.current.resume();
    }
  };

  return (
    <section className="mental-math-section section-space" id="mental-math">
      <div className="container-page">
        {phase === "intro" && (
          <div className="mental-math-intro">
            <div>
              <p className="eyebrow"><Sparkles size={13} /> BRIGHTRISE MENTAL MATH CHALLENGE</p>
              <h2>Test your mental<br /><span className="serif-accent">math skills.</span></h2>
              <p>How fast can you solve 10 questions? Challenge yourself, find your rhythm, and see your score.</p>
              <button type="button" className="button button-orange" onClick={() => setPhase("setup")}>Play now <ArrowRight size={18} /></button>
            </div>
            <div className="mental-math-preview" aria-hidden="true">
              <span className="math-preview-label">WARM UP</span>
              <strong>27 <i>+</i> 18 <em>= ?</em></strong>
              <div><span>45</span><span><Check size={16} /> Nice work!</span></div>
              <p>10 questions · choose your pace</p>
            </div>
          </div>
        )}

        {phase === "setup" && (
          <div className="math-game-card math-setup-card">
            <div className="math-game-heading">
              <p className="eyebrow">MAKE IT YOUR CHALLENGE</p>
              <h2>Ready, set, solve.</h2>
              <p>Choose your level, time, and question type. You will get 10 questions, one at a time.</p>
            </div>
            <fieldset className="math-options">
              <legend>Choose a level</legend>
              <div className="math-choice-grid three-up">
                {Object.entries(levels).map(([value, item]) => <button key={value} type="button" className={level === value ? "selected" : ""} onClick={() => setLevel(value)}><strong>{item.label}</strong><span>{item.description}</span></button>)}
              </div>
            </fieldset>
            <fieldset className="math-options">
              <legend>Set your time</legend>
              <div className="math-choice-grid two-up">
                {[30, 60].map((value) => <button key={value} type="button" className={duration === value ? "selected" : ""} onClick={() => setDuration(value)}><Clock3 size={18} /><strong>{value} seconds</strong></button>)}
              </div>
            </fieldset>
            <fieldset className="math-options">
              <legend>Pick a challenge</legend>
              <div className="math-choice-grid operation-grid">
                {Object.entries(operations).map(([value, label]) => <button key={value} type="button" className={operation === value ? "selected" : ""} onClick={() => setOperation(value)}>{label}</button>)}
              </div>
            </fieldset>
            <div className="math-setup-actions"><Link className="text-link" href="/">Back to home</Link><button type="button" className="button button-dark" onClick={startGame}>Start challenge <ArrowRight size={18} /></button></div>
          </div>
        )}

        {phase === "playing" && question && (
          <div className="math-game-card math-play-card">
            <div className="math-game-status"><span>Question <strong>{questionIndex + 1}</strong> / {QUESTION_COUNT}</span><span className="math-timer"><Clock3 size={16} /> {timeLeft}s</span><span>Streak <strong>{streak}</strong></span><button type="button" className="math-sound-toggle" onClick={toggleSound} aria-pressed={soundEnabled} aria-label={soundEnabled ? "Mute game sounds" : "Turn on game sounds"} title={soundEnabled ? "Mute sounds" : "Turn on sounds"}>{soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}</button></div>
            <div className="math-progress" aria-hidden="true"><span style={{ width: `${((questionIndex + 1) / QUESTION_COUNT) * 100}%` }} /></div>
            <p className="math-operation-label">{operations[question.operation]}</p>
            <p className="math-question" aria-live="polite">{question.text} <span>=</span></p>
            <form onSubmit={submitAnswer} className="math-answer-form">
              <label className="sr-only" htmlFor="mental-math-answer">Your answer to {question.text}</label>
              <input ref={answerRef} id="mental-math-answer" inputMode="numeric" pattern="[0-9]*" autoComplete="off" value={answer} onChange={(event) => setAnswer(event.target.value.replace(/[^0-9]/g, ""))} disabled={Boolean(feedback)} placeholder="?" />
              <button type="submit" className="button button-orange" disabled={Boolean(feedback) || answer === ""}>Check answer <ArrowRight size={18} /></button>
            </form>
            <div className={`math-feedback ${feedback || ""}`} aria-live="assertive">{feedback === "correct" && <><Check size={18} /> Correct! Keep it going.</>}{feedback === "incorrect" && <><X size={18} /> The answer was {question.answer}. Keep trying.</>}</div>
          </div>
        )}

        {phase === "results" && (
          <div className="math-game-card math-results-card">
            <div className="math-results-icon"><Trophy size={31} /></div>
            <p className="eyebrow">CHALLENGE COMPLETE</p>
            <h2>That was some quick thinking.</h2>
            <p className="math-results-description">Every question is a chance to practise. Here is how this round went:</p>
            <div className="math-results-grid"><ResultMetric label="Your score" value={`${score}/${QUESTION_COUNT}`} /><ResultMetric label="Accuracy" value={`${accuracy}%`} /><ResultMetric label="Best streak" value={bestStreak} /></div>
            <div className="math-results-cta"><div><strong>Want to improve your math skills?</strong><span>Book a FREE Trial Class with BrightRise Academy.</span></div><Link href="/book-a-free-trial" className="button button-dark">Book a free trial <ArrowRight size={18} /></Link></div>
            <button type="button" className="math-retry" onClick={startGame}><RotateCcw size={16} /> Play again</button>
            <button type="button" className="math-retry" style={{ marginLeft: 24 }} onClick={() => setPhase("setup")}>Change challenge</button>
          </div>
        )}
      </div>
    </section>
  );
}
