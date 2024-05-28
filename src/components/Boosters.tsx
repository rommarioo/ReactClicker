type PropsBoosters = {
  onScale: () => void;
  score: number;
  autoClick: () => void;
};

const Boosters = ({ onScale, autoClick, score }: PropsBoosters) => {
  return (
    <div className="boosters">
      <h3>Boosters</h3>
      <div className="boosters__card">
        <button onClick={onScale} disabled={score < 20}>
          Up clicks <br />
          (20 clicks)
        </button>
        <button onClick={autoClick} disabled={score < 100}>
          Auto clicks
          <br />
          (100 clicks)
        </button>
      </div>
    </div>
  );
};

export default Boosters;
