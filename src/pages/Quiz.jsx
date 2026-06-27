import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { FiBookmark, FiChevronLeft, FiChevronRight, FiSkipForward, FiPauseCircle, FiPlayCircle } from "react-icons/fi";
import ProgressBar from "../components/ProgressBar";
import Timer from "../components/Timer";
import questionBank from "../data/questions";

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const categoryId = location.state?.categoryId ?? "general";

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    const filtered = questionBank.filter((item) => item.category === categoryId).slice(0, 10);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    const withOptions = shuffled.map((item) => ({ ...item, options: [...item.options].sort(() => Math.random() - 0.5) }));
    setQuestions(withOptions);
    setSecondsLeft(30);
  }, [categoryId]);

  useEffect(() => {
    if (isPaused || questions.length === 0) return;

    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          handleAnswer("skip");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [currentIndex, isPaused, questions.length]);

  useEffect(() => {
    if (questions.length === 0) return;
    const interval = window.setInterval(() => setTimeTaken((prev) => prev + 1), 1000);
    return () => window.clearInterval(interval);
  }, [questions.length]);

  const currentQuestion = questions[currentIndex];
  const progress = questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0;

  const score = useMemo(() => {
    return answers.filter((answer) => answer.isCorrect).length * 10;
  }, [answers]);

  function handleAnswer(option) {
    if (!currentQuestion) return;

    const isCorrect = option === currentQuestion.answer;
    const nextAnswer = {
      questionId: currentQuestion.id,
      selected: option,
      correctAnswer: currentQuestion.answer,
      isCorrect,
      explanation: currentQuestion.explanation,
    };

    const nextAnswers = [...answers, nextAnswer];
    setAnswers(nextAnswers);
    setSelectedOption("");

    if (currentIndex === questions.length - 1) {
      navigate("/result", {
        state: {
          categoryId,
          answers: nextAnswers,
          score: nextAnswers.filter((answer) => answer.isCorrect).length * 10,
          timeTaken,
          skipped: nextAnswers.filter((answer) => answer.selected === "skip").length,
          difficulty: currentQuestion.difficulty,
        },
      });
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSecondsLeft(30);
  }

  function handleNext() {
    if (!selectedOption) {
      handleAnswer("skip");
      return;
    }
    handleAnswer(selectedOption);
  }

  function toggleBookmark() {
    if (!currentQuestion) return;
    setBookmarked((prev) =>
      prev.includes(currentQuestion.id) ? prev.filter((id) => id !== currentQuestion.id) : [...prev, currentQuestion.id]
    );
  }

  function togglePause() {
    setIsPaused((prev) => !prev);
  }

  if (!currentQuestion) {
    return <div className="page-shell"><p>Preparing questions…</p></div>;
  }

  return (
    <div className="page-shell quiz-page">
      <div className="quiz-shell">
        <div className="quiz-topbar">
          <div>
            <p className="eyebrow">Live challenge</p>
            <h1>{currentQuestion.categoryName}</h1>
          </div>
          <div className="quiz-actions">
            <button type="button" className="icon-btn" onClick={toggleBookmark}>
              <FiBookmark />
            </button>
            <button type="button" className="icon-btn" onClick={togglePause}>
              {isPaused ? <FiPlayCircle /> : <FiPauseCircle />}
            </button>
          </div>
        </div>

        <ProgressBar progress={progress} current={currentIndex + 1} total={questions.length} />
        <div className="quiz-meta-row">
          <span className="pill">{currentQuestion.difficulty}</span>
          <Timer secondsLeft={secondsLeft} />
          <span className="pill">Score {score}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            className="question-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <p className="question-label">Question {currentIndex + 1}</p>
            <h2>{currentQuestion.question}</h2>
            <div className="options-grid">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`option-btn ${selectedOption === option ? "selected" : ""}`}
                  onClick={() => setSelectedOption(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="quiz-controls">
          <button type="button" className="ghost-btn" onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0))}>
            <FiChevronLeft /> Previous
          </button>
          <button type="button" className="ghost-btn" onClick={() => handleAnswer("skip")}>
            <FiSkipForward /> Skip
          </button>
          <button type="button" className="primary-btn" onClick={handleNext}>
            Next <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
