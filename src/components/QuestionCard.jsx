import { motion } from "framer-motion";

function QuestionCard({ question, options, selectedOption, selectOption }) {
  return (
    <motion.div
      className="question-card"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
    >
      <p className="question-label">Question</p>
      <h2>{question}</h2>
      <div className="options-grid">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`option-btn ${selectedOption === option ? "selected" : ""}`}
            onClick={() => selectOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default QuestionCard;

