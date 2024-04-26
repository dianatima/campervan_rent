import styled from "@emotion/styled";
import { ReactComponent as Heart } from "../../images/svg/heart.svg";

export const HeroContainer = styled.div`
width: 1440px;
margin-left: auto;
margin-right: auto;
position: absolute;
top: 0%;
left: 50%;
transform: translate(-50%,0);
`;

export const Container = styled.div`
width: 1440px;
margin-left: auto;
margin-right: auto;
`;

export const HomeWrap = styled.div`
margin-left: auto;
margin-right: auto;
padding-top: 80px;
`;

export const HeroWrap = styled.div`
height: 844px;
width: 100%;
margin-left: auto;
margin-right: auto;
position: relative;
`;

export const ImgWrap = styled.img`
width: 100%;
display: block;
object-fit: cover;
object-position: center;
`;

export const Title1 = styled.h1`
position: absolute;
z-index: 10;
top: 80px;
right: 0px;
font-size: 82px;
color: #372e2e;
`;

export const Title2 = styled.h1`
position: absolute;
z-index: 10;
top: 120px;
right: 150px;
font-size: 72px;
`;

export const TitleAccent = styled.span`
color: var(--button-color);
font-size: 92px;
`;

export const HeartIcon = styled(Heart)`
  stroke: var(--button-color);
  position: absolute;
    z-index: 10;
    top: 150px;
    right: 75px;
    width: 20px;
    height: 20px;
    `;

export const Ovarlay = styled.div`
height:723px;
width: 100%;
margin-left: auto;
margin-right: auto;
margin-left: auto;
margin-right: auto;
background-color: #32acea;
position: absolute;
top: 0;
left: 0;
opacity:0.1;
`;

export const HeroBtn = styled.button`
position: absolute;
z-index: 10;
top: 280px;
right: 0px;
padding: 15px 40px;
border-radius: 200px;
background-color: var(--button-color);
font-size: 22px;
line-height: 1.5;
outline: none;
color: #eee6e6;
width: 300px;
font-weight: 500;

&:hover {
    background: var(--button-hover-color);
  }
`;

export const AdvWrap = styled.section`
display: flex;
justify-content: space-between;
padding: 80px 0;
`;

export const AdvDiv = styled.div`
display: flex;
flex-direction: column;
row-gap: 10px;
align-items: center;
width: 320px;
text-align: center;
`;

export const AdvIcon = styled.div`
min-height: 84px;
`;

export const AsvTitle = styled.p`
color: var(--main-color);
font-size: 24px;
font-weight: 600;
line-height: 1.25;
`;

export const AsvText = styled.p`
color: var(--main-color);
font-size: 18px;
font-weight: 400;
line-height: 1.25;
`;

  export const FotoWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
  `;

export const FotoTitle = styled.p`
color: var(--main-color);
font-size: 32px;
font-weight: 600;
line-height: 1.25;
`;

export const FotoImgWrap = styled.h2`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 10px;
`;

export const FotoImg = styled.img`
height: 210px;
border-radius: 10px;
display: block;
object-fit: cover;
object-position: center;
`;

export const Footer = styled.footer`
background-color: #d5e3ed;
padding: 30px 0;
margin-top: 80px;
`;

export const FooterWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const FooterText = styled.p`
color: var(--text-color);
font-size: 16px;
font-weight: 400;
line-height: 1.5;
`;