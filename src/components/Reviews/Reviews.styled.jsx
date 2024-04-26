import styled from "@emotion/styled";
import { ReactComponent as Star } from "../../images/svg/star.svg";

export const StarIconGold = styled(Star)`
width: 16px;
height: 16px;
stroke: var(--rating-color);
fill: var(--rating-color);
`;

export const StarIconGray = styled(Star)`
width: 16px;
height: 16px;
stroke: var(--block-color);
fill: var(--block-color);
`;

export const BlocksWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 430px;
    justify-content: left;
    gap: 24px;
`;

export const ReviewWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 430px;
    justify-content: left;
    gap: 16px;
`;

export const UserBlock = styled.div`
    display: flex;
    gap: 16px;
   justify-content: left;
   align-items: center;
`;

export const Avatar = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
width: 60px;
height: 60px;
background-color: var(--block-color);
color: var(--button-color);
font-size: 24px;
font-weight: 600;
line-height: 1.25;
`;

export const InfoWrap = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`;

export const Name = styled.p`
color: var(--main-color);
font-size: 18px;
font-weight: 600;
line-height: 1.33;
`;

export const Rating = styled.div`
display: flex;
gap: 4px;
justify-content: left;
`;

export const ReviewBlock = styled.div`

`;

export const Text = styled.p`
color: var(--text-color);
font-size: 16px;
font-weight: 400;
line-height: 1.5;
`;
