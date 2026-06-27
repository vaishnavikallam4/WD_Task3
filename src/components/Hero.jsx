import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlayCircle, FiStar } from "react-icons/fi";

function Hero() {
  return (
    <section className="hero-section">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
        <div className="hero-badge">
          <FiStar /> Premium learning experience
        </div>
        <h1>Turn every quiz into a polished skill sprint.</h1>
        <p>QuizNova Pro merges elegant UI, adaptive challenges, and smart progress tracking into a premium experience for modern learners.</p>
        <div className="hero-actions">
          <Link to="/categories" className="primary-btn">
            Explore Quiz Modes <FiArrowRight />
          </Link>
          <Link to="/dashboard" className="ghost-btn">
            <FiPlayCircle /> View Dashboard
          </Link>
        </div>
      </motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="glass-card hero-panel">
          <div className="panel-top">
            <span className="panel-pill">Daily Challenge</span>
            <span className="panel-pill accent">+120 XP</span>
          </div>
          <h3>AI Sprint</h3>
          <p>10 questions • 30s timer • streak bonus</p>
          <div className="hero-metrics">
            <div>
              <strong>92%</strong>
              <span>Accuracy</span>
            </div>
            <div>
              <strong>7</strong>
              <span>Streak</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
