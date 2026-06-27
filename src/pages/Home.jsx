import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBookOpen, FiClock, FiZap } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Hero />
        <section className="feature-strip">
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <FiBookOpen size={22} />
            <div>
              <h3>100 Curated Questions</h3>
              <p>Across 10 categories with three difficulty layers.</p>
            </div>
          </motion.div>
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FiClock size={22} />
            <div>
              <h3>Adaptive Timers</h3>
              <p>Choose 15s, 30s, or 60s rounds to match your pace.</p>
            </div>
          </motion.div>
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <FiZap size={22} />
            <div>
              <h3>XP, Levels & Streaks</h3>
              <p>Track mastery with achievements and daily challenges.</p>
            </div>
          </motion.div>
        </section>
        <Stats />
        <section className="cta-section">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="eyebrow">Ready to compete?</p>
              <h2>Launch your first premium quiz session.</h2>
              <p>Sharpen your instincts, climb the ranks, and review every answer with clarity.</p>
            </div>
            <Link to="/categories" className="primary-btn">
              Start Playing <FiArrowRight />
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
