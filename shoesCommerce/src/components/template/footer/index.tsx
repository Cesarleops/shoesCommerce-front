import { Title } from "../../atoms/title";
import { CompanyInfo } from "../../molecules/companyInfo";
import "./footer.scss";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--info">
        <CompanyInfo type="info" />
        <CompanyInfo type="politics" />
        <CompanyInfo type="tutorials" />
      </div>

      <Title shape="page" text="Lemkus" />
    </div>
  );
};
