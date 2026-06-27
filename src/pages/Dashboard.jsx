import { Link } from "react-router-dom";
import { FiArrowLeft, FiAward, FiTrendingUp, FiZap } from "react-icons/fi";

function Dashboard() {
  return (
    <div className="page-shell dashboard-page">
      <div className="back-link-row">
        <Link to="/" className="ghost-btn">
          <FiArrowLeft /> Back Home
        </Link>
      </div>
      <div className="section-heading">
        <p className="eyebrow">Performance analytics</p>
        <h1>Stay ahead with your mastery dashboard.</h1>
        <p>Track your history, accuracy, XP, and streaks in one premium overview.</p>
      </div>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <FiTrendingUp />
          <h3>Highest Score</h3>
          <p>930 XP</p>
        </div>
        <div className="dashboard-card">
          <FiZap />
          <h3>Average Score</h3>
          <p>78%</p>
        </div>
        <div className="dashboard-card">
          <FiAward />
          <h3>Current Level</h3>
          <p>Level 7</p>
        </div>
      </div>
      <div className="activity-card">
        <h3>Recent Attempts</h3>
        <ul>
          <li>AI Sprint • 92% • 2m 10s</li>
          <li>Web Dev Focus • 84% • 1m 45s</li>
          <li>Science Rush • 71% • 2m 01s</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
