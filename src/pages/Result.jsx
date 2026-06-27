import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FiAward, FiDownload, FiHome, FiRefreshCw } from "react-icons/fi";

function Result() {
  const location = useLocation();
  const { answers = [], score = 0, timeTaken = 0, skipped = 0, categoryId = "general" } = location.state ?? {};

  const correct = answers.filter((answer) => answer.isCorrect).length;
  const wrong = answers.filter((answer) => !answer.isCorrect && answer.selected !== "skip").length;
  const accuracy = answers.length ? Math.round((correct / answers.length) * 100) : 0;
  const percentage = Math.round((score / (answers.length * 10)) * 100) || 0;
  const badge = accuracy >= 80 ? "Elite" : accuracy >= 60 ? "Strong" : "Momentum";

  const handleDownload = () => {
    const payload = `QuizNova Pro\nCategory: ${categoryId}\nScore: ${score}\nAccuracy: ${accuracy}%\nCorrect: ${correct}\nWrong: ${wrong}\nSkipped: ${skipped}\nTime: ${timeTaken}s`;
    const blob = new Blob([payload], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "quiznova-result.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="page-shell result-page">
      <motion.div className="result-card" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="score-ring">
          <div className="score-ring-inner">
            <span>{percentage}%</span>
            <small>Score</small>
          </div>
        </div>
        <div className="result-content">
          <p className="eyebrow">Performance Complete</p>
          <h1>{badge} Performance</h1>
          <p>You earned {score} XP with a {accuracy}% accuracy rate across {answers.length} questions.</p>
          <div className="stats-grid">
            <div><strong>{correct}</strong><span>Correct</span></div>
            <div><strong>{wrong}</strong><span>Wrong</span></div>
            <div><strong>{skipped}</strong><span>Skipped</span></div>
            <div><strong>{timeTaken}s</strong><span>Time</span></div>
          </div>
          <div className="result-actions">
            <Link to="/quiz" state={{ categoryId }} className="primary-btn">
              <FiRefreshCw /> Retry
            </Link>
            <Link to="/" className="ghost-btn">
              <FiHome /> Home
            </Link>
            <button type="button" className="ghost-btn" onClick={handleDownload}>
              <FiDownload /> Download Score
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div className="achievement-badge" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <FiAward />
        <div>
          <h3>Achievement Unlocked</h3>
          <p>Consistency streak +1 and new XP balance ready for the next round.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Result;
