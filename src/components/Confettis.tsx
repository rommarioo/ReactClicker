import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const Confettis = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height}></Confetti>;
};

export default Confettis;
