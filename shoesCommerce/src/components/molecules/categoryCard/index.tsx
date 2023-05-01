import { Title } from "../../atoms/title";
import "./categoryCard.scss";
interface Props {
  text: string;
  img?: string;
}
export const CategoryCard = ({ text, img }: Props) => {
  return (
    <div className="categoryCard">
      <img src={img} alt="something" className="categoryCard--image" />
      <div className="categoryCard--text">
        <Title shape="section" text={text} />
      </div>
    </div>
  );
};
