function ProgressBar({ progress, current, total }) {
  return (
    <div className="progress-block">
      <div className="progress-labels">
        <span>Question {current}</span>
        <span>{total} total</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
