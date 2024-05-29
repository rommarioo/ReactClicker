type PropsBoosters = {
  onScale: () => void;
  score: number;
  switchCoin: () => void;
};

const Boosters = ({ onScale, switchCoin, score }: PropsBoosters) => {
  return (
    <div className="boosters">
      <h3>Boosters</h3>
      <div className="boosters__card">
        <button onClick={onScale} disabled={score < 20}>
          Up Clicks <br />
          (20 clicks)
        </button>
        <button onClick={switchCoin} disabled={score < 100}>
          Switch Coin
          <br />
          (100 clicks)
        </button>
      </div>
    </div>
  );
};

export default Boosters;
