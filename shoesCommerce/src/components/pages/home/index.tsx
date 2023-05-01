import { HeaderLink } from "../../atoms/headerLink";
import { Footer } from "../../template/footer";
import { Header } from "../../template/header";
import { GiHamburgerMenu } from "react-icons/gi";
import "./home.scss";
import { Title } from "../../atoms/title";
import { CategorySection } from "../../template/categorySection";
import { CategoryCard } from "../../molecules/categoryCard";
import { Carousel } from "../../molecules/Carousel";
import { ShoeCard } from "../../molecules/shoeCard";
export const Home = () => {
  const isMobile = window.innerWidth < 600;
  return (
    <div className="home">
      {isMobile ? (
        <div>
          <GiHamburgerMenu />
        </div>
      ) : (
        <div>
          <Header>
            <HeaderLink text="LAUNCHES" />
            <HeaderLink text="SNEAKERS" />
            <HeaderLink text="APPAREL" />
            <HeaderLink text="KIDS" />
            <HeaderLink text="ACCESORIES" />
            <HeaderLink text="SALE" />
            <HeaderLink text="CULTURE" />
          </Header>
          <CategorySection>
            <CategoryCard
              text="SNEAKERS"
              img="https://i.pinimg.com/564x/b0/d0/b5/b0d0b58ae102b8ff150f5170b8e60f5a.jpg"
            />
            <CategoryCard
              text="APPAREL"
              img="https://i.pinimg.com/564x/fb/5d/13/fb5d13409cbfa8b9723874cbe68bdb44.jpg"
            />
            <CategoryCard
              text="SALE"
              img="https://i.pinimg.com/564x/5c/eb/06/5ceb0667b4646090819fccbc0708bef8.jpg"
            />
          </CategorySection>
          <div className="just">
            <Title shape="page" text="JUST DROPPED" />
          </div>

          <CategorySection>
            <ShoeCard
              name="NIKE AIR MAX 90"
              price={2000}
              img="https://i.pinimg.com/564x/cb/27/b4/cb27b44bb3b3ff5838ecef62d738a4e9.jpg"
            />
            <ShoeCard
              name="NIKE AIR FORCE DENIM BLUE"
              price={3000}
              img="https://i.pinimg.com/564x/cb/27/b4/cb27b44bb3b3ff5838ecef62d738a4e9.jpg"
            />
            <ShoeCard
              name="NIKE AIR FORCE 1 "
              price={4000}
              img="https://i.pinimg.com/564x/cb/27/b4/cb27b44bb3b3ff5838ecef62d738a4e9.jpg"
            />
          </CategorySection>
          <div className="just">
            <Title shape="page" text="DROPPING SOON" />
          </div>
          <CategorySection>
            <ShoeCard
              name="NIKE AIR MAX 90"
              price={2000}
              img="https://i.pinimg.com/564x/cb/27/b4/cb27b44bb3b3ff5838ecef62d738a4e9.jpg"
            />
            <ShoeCard
              name="NIKE AIR FORCE DENIM BLUE"
              price={3000}
              img="https://i.pinimg.com/564x/cb/27/b4/cb27b44bb3b3ff5838ecef62d738a4e9.jpg"
            />
            <ShoeCard
              name="NIKE AIR FORCE 1 "
              price={4000}
              img="https://i.pinimg.com/564x/cb/27/b4/cb27b44bb3b3ff5838ecef62d738a4e9.jpg"
            />
          </CategorySection>
          <Title shape="page" text="CULTURE" />
          <Carousel></Carousel>
        </div>
      )}
      <Footer />
    </div>
  );
};
