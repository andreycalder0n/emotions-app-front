export default function CardTravel({ card }) {
  return (
    <div className="Card">
      <div className={`Card--cover bg-sydney`}></div>
      <div className="Card--content">
        <p className="Card--content__title text-bold">{card.title}</p>
        <p className="Card--content__description">{card.description}</p>
      </div>
    </div>
  );
}
