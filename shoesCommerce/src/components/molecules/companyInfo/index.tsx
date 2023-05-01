import { FooterLink } from "../../atoms/footerLink";

interface Props {
  type: "politics" | "info" | "tutorials";
}

export const CompanyInfo = ({ type }: Props) => {
  return type === "politics" ? (
    <div>
      <FooterLink text="PRIVACY POLICY" />
      <FooterLink text="DELIVERY POLICY" />
      <FooterLink text="TERMS & CONDITIONS" />
    </div>
  ) : type === "info" ? (
    <div>
      <FooterLink text="ABOUT US" />
      <FooterLink text="FAQ" />
      <FooterLink text="CONTACT US " />
    </div>
  ) : (
    <div>
      <FooterLink text="HOW TO ORDER" />
      <FooterLink text="TRACK YOUR ORDER" />
      <FooterLink text="RETURNS" />
    </div>
  );
};
