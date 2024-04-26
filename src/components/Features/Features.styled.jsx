import styled from "@emotion/styled";

export const FeaturesWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 430px;
    height: 530px;
    justify-content: space-between;
`;

export const VDWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 430px;
    height: 530px;
`;

export const VDTitle = styled.p`
color: var(--main-color);
font-size: 20px;
font-weight: 600;
line-height: 1.2;
padding-bottom: 24px;
padding-top: 44px;
`;

export const VDList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-top: 24px;
    border-top: 1px solid var(--line-color);
`;

export const VDItem = styled.li`
    display: flex;
    justify-content: space-between;
    color: var(--main-color);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.33; 
`;

export const VDDetail = styled.p`
`;
