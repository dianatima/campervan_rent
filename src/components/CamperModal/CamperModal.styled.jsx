import styled from "@emotion/styled";
import { ReactComponent as Star } from "../../images/svg/star.svg";

export const StarIcon = styled(Star)`
stroke: var(--rating-color);
fill: var(--rating-color);
`;

export const Ovarlay = styled.div`
  height: 110vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
`;

export const ContentWraper = styled.div`
height: 140vh;
position: absolute;
top: 10%;
left:50%;
transform: translateX(-50%);
`;

export const Content = styled.div`
overflow: scroll;
height: 88vh;

overflow: scroll;
overflow-x: hidden;
width: 982px;
border-radius: 20px;
border: none;
background-color: white;
padding: 40px;
padding-right: 32px;
display: flex;
flex-direction: column;

&::-webkit-scrollbar {
  width: 8px;
}

&::-webkit-scrollbar-track {
  /* background-color: rgb(55, 65, 81); */
  
}

&::-webkit-scrollbar-thumb {
  background-color: #D9D9D9;
  border-radius: 6px;
  border: none;
  padding-top: 20px;
}
`;

export const MInfoBlock = styled.div`
  width: 982px;
  border-radius: 20px;
  border: none;
  background-color: white;
  padding: 40px;
`;

export const CloseBtn = styled.button`
width: 32px;
height: 32px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
stroke: var(--main-color);
transition: stroke 500ms ease-in-out;

&:hover {
    stroke: var(--button-hover-color);
  }
`;

export const ImgBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgItem = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  border: none;
  object-fit: cover;
`;

export const DescripText = styled.p`
 font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
color: var(--text-color);
`;

export const TabWrap = styled.div`
padding-bottom: 24px;
 border-bottom: 1px solid var(--border-color);
`;

export const TabUl = styled.ul`
 display: flex;
 gap: 40px;
`;

export const TabItem = styled.li`
color: var(--main-color);
font-size: 20px;
font-weight: 600;
line-height: 1.2;
position: relative;
cursor: pointer;

&:hover::after {
  content: '';
  width: 100%;
  height: 5px;
  color: var(--button-color);
  position: absolute;
  top: 46px;
  left: 0;
  background-color: rgba(238, 19, 19, 0.15);
}
`;

export const TabAfter = styled.div`
  width: 100%;
  height: 5px;
  color: var(--button-color);
  position: absolute;
  top: 46px;
  left: 0;
  background-color: var(--button-color);

`;

export const TabsContent = styled.div`
padding-top: 44px;
display: flex;
justify-content: space-between;
`;

export const Pb10 = styled.div`
 padding-bottom: 10px;
`;

export const Pb16 = styled.div`
 padding-bottom: 16px;
`;

export const Pb24 = styled.div`
 padding-bottom: 24px;
`;

export const Pb44 = styled.div`
 padding-bottom: 44px;
`;
