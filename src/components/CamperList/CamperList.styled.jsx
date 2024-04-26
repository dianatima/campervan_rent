import styled from "@emotion/styled";
import { ReactComponent as Heart } from "../../images/svg/heart.svg";
import { ReactComponent as Star } from "../../images/svg/star.svg";

export const StarIcon = styled(Star)`
stroke: var(--rating-color);
fill: var(--rating-color);
`;

export const CatalogWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  gap: 50px;
`;

export const CLWraper = styled.div`
  width: 888px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const CLItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 888px;
  padding: 24px;
  gap: 24px;
  border: 1px solid var(--border-color);
  border-radius: 20px;
`;

export const CamperPhoto = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  object-fit: cover;
  object-position: 20% 50%;
`;

export const InfoBlock = styled.div`
  width: 526px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
`;

export const MainInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

export const MainBlock = styled.div`
color: var(--main-color);
display: flex;
justify-content: space-between;
align-items: start;
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: right;
  gap: 11px;
  align-items: center;
`;

export const Title = styled.h1`
font-size: 24px;
font-weight: 600;
line-height: 1.25;
`;

export const SeconBlockWrap = styled.div`
  display: flex;
  justify-content: left;
  gap: 16px;
  align-items: center;
`;

export const SeconBlock = styled.div`
  display: flex;
  justify-content: left;
  gap: 4px;
  align-items: center;
`;

export const Price = styled.p`
font-size: 24px;
font-weight: 600;
line-height: 1.25;
`;

export const Text = styled.p`
color: var(--main-color);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
`;

export const SpanUnderline = styled.span`
text-decoration-line: underline;
`;

export const MainTextWrap = styled.div`
`;

export const MainText = styled.p`
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
color: var(--text-color);
`;

export const DetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 8px;
`;

export const DetailsItem = styled.li`
display: flex;
gap: 8px;
align-items: center;
border: 1px solid transparent;
border-radius: 100px;
background-color: var(--block-color);
padding: 12px 18px;
color: var(--main-color);
border: none;
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 1.25;
`;

export const DetailsSpan = styled.span`
text-transform: capitalize;
`;

export const ShowMoreBtn = styled.button`
padding: 16px 40px;
border-radius: 200px;
background-color: var(--button-color);
font-size: 16px;
line-height: 1.5;
outline: none;
color: white;
width: 166px;

&:hover {
    background: var(--button-hover-color);
  }
`;

export const HeartIcon = styled(Heart)`
  stroke: #101828;
  cursor: pointer;

&:hover {
    stroke: var(--button-color);
}
`;

export const RedHeartIcon = styled(Heart)`
fill: var(--button-color);
stroke: var(--button-color);
cursor: pointer;

&:hover {
    fill: var(--button-hover-color);
    stroke: var(--button-hover-color);
}
`;

export const NoCamperText = styled.p`
text-overflow: ellipsis;
text-align: center;
white-space: nowrap;
overflow: hidden;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
color: var(--text-color);
`;

export const LoadMoreBtn = styled.button`
padding: 16px 32px;
border-radius: 200px;
border: 1px solid var(--show-more-color);
font-size: 16px;
line-height: 1.5;
letter-spacing: -0.08px;
color: var(--main-color);
width: 145px;

&:hover {
    box-shadow: 0 0 2px 1px var(--button-hover-color);
  }
`;
