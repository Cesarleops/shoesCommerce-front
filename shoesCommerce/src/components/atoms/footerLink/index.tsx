interface Props {
  text: string;
  onClick?: () => void;
}
export const FooterLink = ({ onClick, text }: Props) => {
  return <p onClick={onClick}>{text}</p>;
};
