import "./title.scss";

interface Props {
  text: string;
  shape: "page" | "section" | "product";
}
export const Title = ({ text, shape }: Props) => {
  return shape === "page" ? (
    <p className="main_title">{text}</p>
  ) : shape === "section" ? (
    <p className="section_title">{text}</p>
  ) : (
    <h5>{text}</h5>
  );
};
