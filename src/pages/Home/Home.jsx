import {
  HomeWrap,
  HeroWrap,
  ImgWrap,
  Title1,
  HeroBtn,
  HeroContainer,
  Container,
  AdvWrap,
  AdvDiv,
  AdvIcon,
  AsvTitle,
  AsvText,
  FotoWrap,
  FotoTitle,
  FotoImgWrap,
  FotoImg,
  Footer,
  FooterWrap,
  FooterText
} from "./Home.styled";
import hero from "./hero2.jpeg";
import holiday1 from "./holiday1.jpeg";
import holiday2 from "./holiday2.webp";
import holiday3 from "./holiday3.jpg";
import holiday4 from "./holiday4.jpg";
import holiday5 from "./holiday5.jpg";
import holiday6 from "./holiday6.jpg";
import holiday7 from "./holiday7.jpg";
import holiday8 from "./holiday8.webp";
import holiday9 from "./holiday9.jpg";
import holiday10 from "./holiday10.jpg";
import holiday11 from "./holiday11.jpg";
import holiday12 from "./holiday12.jpeg";

import { ReactComponent as InsuranceIcon } from "../../images/svg/insurance.svg";
import { ReactComponent as AssistanceIcon } from "../../images/svg/assistance.svg";
import { ReactComponent as PaymentIcon } from "../../images/svg/payment.svg";
import { ReactComponent as SupportIcon } from "../../images/svg/support.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <HomeWrap>
      <HeroWrap>
        <ImgWrap src={hero} />
        <HeroContainer>
          <Title1>Home is where we parked</Title1>
          <Link to="/catalog"><HeroBtn>OUR CAMPERVANS</HeroBtn></Link>
        </HeroContainer>
      </HeroWrap>
      <Container>


        <AdvWrap>
          <AdvDiv>
            <AdvIcon><InsuranceIcon /></AdvIcon>
            <AsvTitle>All-round insurance</AsvTitle>
            <AsvText>Fully comprehensive insurance included. Sit back, and enjoy your holiday with our all-round insurance.</AsvText>
          </AdvDiv>
          <AdvDiv>
            <AdvIcon><AssistanceIcon /></AdvIcon>
            <AsvTitle>Road assistance 24/7</AsvTitle>
            <AsvText>If something were to happen on the road, our road assistance helps you, 24/7.</AsvText>
          </AdvDiv>
          <AdvDiv>
            <AdvIcon><PaymentIcon /></AdvIcon>
            <AsvTitle>Secure payments</AsvTitle>
            <AsvText>You get access to our secure payment system. We are an impartial intermediator for both deposit and rent.</AsvText>
          </AdvDiv>
          <AdvDiv>
           <AdvIcon><SupportIcon /></AdvIcon>
            <AsvTitle>Phone support</AsvTitle>
            <AsvText>We are here if you need support. We do our best to solve all types of problems that may appear. Just call us.</AsvText>
          </AdvDiv>
        </AdvWrap>

        <FotoWrap>
          <FotoTitle>Holidays with our vehicles</FotoTitle>
          <FotoImgWrap>
            <FotoImg src={holiday1}></FotoImg>
            <FotoImg src={holiday2}></FotoImg>
            <FotoImg src={holiday12}></FotoImg>
            <FotoImg src={holiday4}></FotoImg>
            <FotoImg src={holiday5}></FotoImg>
            <FotoImg src={holiday6}></FotoImg>
            <FotoImg src={holiday7}></FotoImg>
            <FotoImg src={holiday8}></FotoImg>
            <FotoImg src={holiday9}></FotoImg>
            <FotoImg src={holiday10}></FotoImg>
            <FotoImg src={holiday11}></FotoImg>
            <FotoImg src={holiday3}></FotoImg>
          </FotoImgWrap>
        </FotoWrap>
      </Container>
      <Footer>
        <Container>
          <FooterWrap>
            <FooterText>© HAPPY CAMPERS - ALL RIGHTS RESERVED 2024</FooterText>
            <FooterText>Support: +38 099 2224455</FooterText>
          </FooterWrap>
        </Container>
      </Footer>
    </HomeWrap>
  );
}
