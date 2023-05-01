import "./headerLink.scss";
interface Props {
  text: string;
}

export const HeaderLink = ({ text }: Props) => {
  console.log(text);
  return <p className="headerlink">{text}</p>;
};
