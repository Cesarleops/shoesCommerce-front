import "./shoeCard.scss";
interface Props {
  name: string;
  price: number;
  img: string;
}
export const ShoeCard = ({ name, img, price }: Props) => {
  return (
    <div className="shoeCard">
      <div className="shoeCard--container">
        <img src={img} alt={name} className="shoeCard--container__image" />
      </div>
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
