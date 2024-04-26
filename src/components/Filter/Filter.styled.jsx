import styled from "@emotion/styled";
import { ReactComponent as Location } from "../../images/svg/location.svg";

export const LocationIcon = styled(Location)`
width: 18px;
height: 20px;

&:hover,&.active {
    stroke: var(--main-color);
}
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    width: 360px;
`;

export const FilterWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 360px;
`;

export const LocationBlock = styled.div`
    width: 360px;
`;

export const LocationWrap = styled.div`
    position: relative;
`;

export const LocationText = styled.div`
    position: absolute;
    top: 18px;
    left: 18px;

`;

export const FilterBlock = styled.div`
    width: 360px;
`;

export const LocationTitle = styled.p`
   color: var(--input-text-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 8px;
`;

export const LocationInput = styled.input`
    background-color: var(--inputs-color);
    border-radius: 10px;
    display: flex;
    padding: 18px;
    align-items: center;
    justify-content: left;
    border-color: transparent;
    /* border: none; */
    width: 360px;
    height: 56px;
    padding-left: 44px;
    cursor: pointer;

    &:hover, &:focus  {
        box-shadow: 0 0 0 0.1rem #1976d233;
    }
`;

export const Filtername = styled.p`
    color: var(--text-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 14px;
`;

export const FilterForm = styled.form`
    width: 360px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const FilterTitle = styled.p`
    color: var(--main-color);
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
`;

export const DetailsWrap = styled.div`
   display: flex;
   flex-wrap: wrap;
   border-top: 1px solid var(--line-color);
   padding-top: 24px;
   row-gap: 8px;
   column-gap: 10px;
`;

export const InputLabel = styled.label`
`;

export const CheckboxItem = styled.div`
height: 95px;
min-width: 112px;
padding: 17px 12px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
border: 1px solid var(--border-color);
gap: 8px;
`;

export const TextWrap = styled.p`
    width: 80px;
    text-align: center;
`;

export const CheckboxItemVan = styled.div`
height: 95px;
min-width: 100px;
padding: 17px 12px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
border: 1px solid var(--border-color);
gap: 8px;
`;

export const CheckboxItemFully = styled.div`
height: 95px;
min-width: 100px;
padding: 9.5px 12px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
border: 1px solid var(--border-color);
gap: 8px;
`;

export const Input = styled.input`
  display: none;

&+label {
  cursor: pointer;
}

&:not(:disabled):not(:checked)+label:hover div {
  box-shadow: 0 0 0 0.1rem rgba(238, 19, 19, 0.15);
}

&:not(:disabled):checked+label:hover div {
  box-shadow: 0 0 0 0.2rem  var(--border-color);
}

&:not(:disabled):checked+label div {
  border-color: var(--button-color);
}
`;

export const SearchBtn = styled.button`
padding: 16px 60px;
border-radius: 200px;
background-color: var(--button-color);
font-size: 16px;
line-height: 1.5;
outline: none;
color: white;
width: 173px;
margin-top: 64px;

&:hover {
    background: var(--button-hover-color);
  }
`;
