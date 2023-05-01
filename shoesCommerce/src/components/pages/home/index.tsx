import { HeaderLink } from "../../atoms/headerLink";
import { Footer } from "../../template/footer";
import { Header } from "../../template/header";
import { GiHamburgerMenu } from "react-icons/gi";
export const Home = () => {
  const isMobile = window.innerWidth < 600;
  return (
    <div>
      {isMobile ? (
        <div>
          <GiHamburgerMenu />
        </div>
      ) : (
        <Header>
          <HeaderLink text="LAUNCHES" />
          <HeaderLink text="SNEAKERS" />
          <HeaderLink text="APPAREL" />
          <HeaderLink text="KIDS" />
          <HeaderLink text="ACCESORIES" />
          <HeaderLink text="SALE" />
          <HeaderLink text="CULTURE" />
        </Header>
      )}
      <Footer />
    </div>
  );
};
