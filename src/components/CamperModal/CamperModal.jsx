import { useEffect, useState } from "react";

import {
  Ovarlay,
  ContentWraper,
  Content,
  CloseBtn,
  Pb10,
  Pb16,
  Pb24,
  Pb44,
  ImgBlock,
  ImgItem,
  DescripText,
  TabUl,
  TabItem,
  TabAfter,
  TabWrap,
  TabsContent,
  StarIcon,
} from "./CamperModal.styled";
import {
  MainBlock,
  Title,
  SeconBlockWrap,
  SeconBlock,
  Text,
  SpanUnderline,
  Price,
} from "../CamperList/CamperList.styled";
import { ReactComponent as CloseIcon } from "../../images/svg/closeBtn.svg";
import { ReactComponent as Location } from "../../images/svg/location.svg";
import { Features } from "components/Features";
import { BookForm } from "components/BookForm";
import { Reviews } from "components/Reviews";

export const CamperModal = ({ adverts, onCloseModal }) => {
  const [isfirstTab, setIsfirstTab] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onCloseModal();
        document.querySelector("body").classList.remove("no-scroll");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onCloseModal]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) onCloseModal();

    document.querySelector("body").classList.remove("no-scroll");
  };
  return (
    <>
      <Ovarlay onClick={handleBackdropClick}>
        <ContentWraper>
          <Content>
            <Pb10>
              <MainBlock>
                <Title>{adverts.name}</Title>
                <CloseBtn onClick={() => onCloseModal()}>
                  <CloseIcon />
                </CloseBtn>
              </MainBlock>
            </Pb10>
            <Pb16>
              <SeconBlockWrap>
                <SeconBlock>
                  <StarIcon />
                  <Text>
                    <SpanUnderline>
                      {adverts.rating}({adverts.reviews.length} Reviews)
                    </SpanUnderline>
                  </Text>
                </SeconBlock>
                <SeconBlock>
                  <Location />
                  <Text>{adverts.location}</Text>
                </SeconBlock>
              </SeconBlockWrap>
            </Pb16>
            <Pb24>
              <SeconBlockWrap>
                <Price>Є{adverts.price.toString().concat(".00")}</Price>
              </SeconBlockWrap>
            </Pb24>
            <Pb24>
              <ImgBlock>
                <ImgItem src={`${adverts.gallery[0]}`} alt="Camper photo" />
                <ImgItem src={`${adverts.gallery[1]}`} alt="Camper photo" />
                <ImgItem src={`${adverts.gallery[2]}`} alt="Camper photo" />
              </ImgBlock>
            </Pb24>
            <Pb44>
              <DescripText>{adverts.description}</DescripText>
            </Pb44>
            <TabWrap>
              <TabUl>
                <TabItem onClick={() => setIsfirstTab(true)}>
                  Features {isfirstTab && <TabAfter />}
                </TabItem>
                <TabItem onClick={() => setIsfirstTab(false)}>
                  Reviews {!isfirstTab && <TabAfter />}
                </TabItem>
              </TabUl>
            </TabWrap>
            <TabsContent>
              {isfirstTab ? (
                <Features adverts={adverts} />
              ) : (
                <Reviews reviews={adverts.reviews} />
              )}
              <BookForm />
            </TabsContent>
          </Content>
        </ContentWraper>
      </Ovarlay>
    </>
  );
};
