interface PropsCoin {
  onClick: () => void;
  change: boolean;
}
const Coin = ({ onClick, change }: PropsCoin) => {
  return (
    <div className="coin">
      <img
        onClick={onClick}
        src={change ? "./images/star.png" : "./images/gold-coin-icon.png"}
        alt="coin"
        className="coin__image"
        width={250}
        height={250}
        loading="lazy"
      />
    </div>
  );
};

export default Coin;
