import "./title.scss";

interface Props {
  text: string;
  shape: "page" | "section" | "product";
}
export const Title = ({ text, shape }: Props) => {
  return shape === "page" ? (
    <h1 className="main_title">{text}</h1>
  ) : shape === "section" ? (
    <h3>{text}</h3>
  ) : (
    <h5>{text}</h5>
  );
};
