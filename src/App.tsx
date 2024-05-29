import { useState } from "react";
import Coin from "./components/Coin";
import ProgressBar from "./components/ProgressBar";
import Boosters from "./components/Boosters";
import Confettis from "./components/Confettis";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(100);
  const [scale, setScale] = useState(1);
  const [change, setChange] = useState(false);
  const [level, setLevel] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const onClick = () => {
    console.log("set");
    setScore(score + 1);
    if (count > 100) {
      setLevel(level + 1);
      setCount(0);
    } else {
      setCount(count + scale);
    }
  };
  const onScale = () => {
    setScore(score - 20);
    setScale(scale + 1);
  };

  const switchCoin = () => {
    setScore(score - 100);
    setChange(!change);
    setShowConfetti(true);
  };
  return (
    <main className="main">
      {showConfetti && <Confettis />}

      <section className="main__section">
        <h1 className="main__title">React Clicker</h1>
        <div className="main__score-container">
          <p className="main__level">Level:{level}</p>
          <p className="main__score">Clicks:{score}</p>
        </div>
        <div className="main__button-container">
          <ProgressBar bgColor={"#387ADF"} width={count} scale={scale} />
          <Coin onClick={onClick} change={change} />
        </div>
        <Boosters onScale={onScale} score={score} switchCoin={switchCoin} />
      </section>
    </main>
  );
}

export default App;
