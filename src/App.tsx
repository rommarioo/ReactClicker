import { useState } from "react";
import Coin from "./components/Coin";
import ProgressBar from "./components/ProgressBar";
import Boosters from "./components/Boosters";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(100);
  const [scale, setScale] = useState(1);

  const onClick = () => {
    console.log("set");
    setScore(score + 1);
    if (count > 100) {
      setCount(0);
    } else {
      setCount(count + scale);
    }
  };
  const onScale = () => {
    setScore(score - 20);
    setScale(scale + 1);
  };

  const autoClick = () => {
    const interval = setInterval(onClick, 1000);

    return () => clearInterval(interval);
  };
  return (
    <main className="main">
      <section className="main__section">
        <h1 className="main__title">React Clicker</h1>
        <div className="main__score-container">
          <p className="main__score">Clicks:{score}</p>
        </div>
        <div className="main__button-container">
          <ProgressBar bgColor={"green"} width={count} scale={scale} />
          <Coin onClick={onClick} />
        </div>
        <Boosters onScale={onScale} score={score} autoClick={autoClick} />
      </section>
    </main>
  );
}

export default App;
