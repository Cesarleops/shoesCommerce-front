import { CompanyInfo } from "../../molecules/companyInfo";

export const Footer = () => {
  return (
    <div>
      <CompanyInfo type="info" />
      <CompanyInfo type="politics" />
      <CompanyInfo type="tutorials" />
    </div>
  );
};
