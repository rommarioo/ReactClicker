const Coin = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="coin">
      <img
        onClick={onClick}
        src="./images/gold-coin-icon.png"
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
