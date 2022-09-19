import "./Card.css";

interface Props {
  name: string;
  status: string;
  species: string;
  origin: string;
  image: string;
}

export const Card = ({ name, status, species, origin, image }: Props) => {
  return (
    <div className="Card__container">
      <img className="Card__img" src={image} alt="rick and morty character" />

      <h2 className="Card__h2">{name}</h2>

      <div className="Card__div--line"></div>

      <ul className="Card__info">
        <li className={`Card__li Card__li--${status}`}>{status} - {species}</li>

        <span><strong>Origin:</strong> {origin}</span>
      </ul>
    </div>
  );
};
