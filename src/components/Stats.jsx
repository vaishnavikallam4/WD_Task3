import { motion } from "framer-motion";

const stats = [
  { value: "10", label: "Curated Categories" },
  { value: "100", label: "Questions" },
  { value: "3", label: "Difficulty Modes" },
  { value: "24/7", label: "Learning Access" },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="section-heading">
        <p className="eyebrow">Why learners love it</p>
        <h2>Built for momentum, clarity, and growth.</h2>
      </div>
      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.div className="stat-card" key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
