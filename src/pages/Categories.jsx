import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiTrendingUp } from "react-icons/fi";
import { categories } from "../data/questions";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id ?? "general");

  const selected = useMemo(
    () => categories.find((category) => category.id === selectedCategory) ?? categories[0],
    [selectedCategory]
  );

  return (
    <div className="page-shell categories-page">
      <div className="back-link-row">
        <Link to="/" className="ghost-btn">
          <FiArrowLeft /> Back Home
        </Link>
      </div>
      <div className="section-heading">
        <p className="eyebrow">Choose your arena</p>
        <h1>Pick a category and begin your next climb.</h1>
        <p>Select a domain to unlock a fresh challenge set and sharpen your edge.</p>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            type="button"
            className={`category-card ${selectedCategory === category.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(category.id)}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="category-icon" style={{ background: `${category.accent}22`, color: category.accent }}>
              <span>{category.name.charAt(0)}</span>
            </div>
            <div className="category-body">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <div className="category-meta">
                <span>10 questions</span>
                <span>3 levels</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
      <motion.div className="selection-panel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <div>
          <p className="eyebrow">Selected path</p>
          <h2>{selected?.name}</h2>
          <p>{selected?.description}</p>
        </div>
        <Link to="/quiz" state={{ categoryId: selected?.id }} className="primary-btn">
          Launch Quiz <FiTrendingUp />
        </Link>
      </motion.div>
    </div>
  );
}

export default Categories;
