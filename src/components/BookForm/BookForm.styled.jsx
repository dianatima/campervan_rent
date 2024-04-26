import styled from "@emotion/styled";
import { ReactComponent as Calendar } from "../../images/svg/calendar.svg";

export const FormWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 448px;
    height: 530px;
    justify-content: space-between;
    gap: 24px;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 24px;
`;

export const FormTitle = styled.p`
    color: var(--main-color);
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 8px;
`;

export const FormInfo = styled.p`
    color: var(--text-color);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
`;

export const BlockWrap = styled.div`
`;

export const FormBlock = styled.div`
display: flex;
flex-direction: column;
gap: 14px;
`;

export const FormInput = styled.input`
    padding: 18px;
    width: 400px;
    height: 56px;
    border-radius: 10px;
    border: none;
    resize: none;
    color: var(--input-text-color);
    background-color: var(--inputs-color);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    cursor: pointer;

    &.active,&:hover,&:focus {
        color: var(--main-color);
    }

    &.active + svg,&:hover + svg,&:focus + svg {
        stroke: var(--main-color);
    }
`;

export const FormTextInput = styled.textarea`
    padding: 18px;
    width: 400px;
    height: 114px;
    border-radius: 10px;
    border: none;
    resize: none;
    color: var(--input-text-color);
    background-color: var(--inputs-color);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    cursor: pointer;

    &.active,&:hover,&:focus {
        color: var(--main-color);
    }
`;

export const DateInputWrap = styled.div`
    position: relative;
`;

export const CalendarIcon = styled(Calendar)`
position: absolute;
top: 20px;
right: 20px;
stroke: var(--input-text-color);

&:hover,&.active {
    stroke: var(--main-color);
}
`;

export const SendBtn = styled.button`
padding: 16px 60px;
border-radius: 200px;
background-color: var(--button-color);
font-size: 16px;
line-height: 1.5;
outline: none;
color: white;
font-weight: 500;
line-height: 1.5;
letter-spacing: -0.08px;

&:hover {
    background: var(--button-hover-color);
  }

&[disabled] {
    color: #d2d5db;
    background: transparent;
    box-shadow: 0 0 2px 2px var(--border-color);
    cursor: not-allowed;
}
`;

export const ErrorWrap = styled.div`
    position: relative;
`;

export const ErrorMsg = styled.div`
    position: absolute;
    left: 0;
    bottom: -22px;
    color: var(--button-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 8px;
    z-index: 20;
`;
