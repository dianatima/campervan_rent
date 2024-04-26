import { CamperModal } from "../CamperModal";
import {
  CamperPhoto,
  InfoBlock,
  MainInfoWrap,
  MainBlock,
  PriceWrap,
  SeconBlockWrap,
  SeconBlock,
  Title,
  Price,
  Text,
  SpanUnderline,
  MainTextWrap,
  MainText,
  DetailsList,
  DetailsItem,
  DetailsSpan,
  HeartIcon,
  RedHeartIcon,
  ShowMoreBtn,
  CLItem,
  StarIcon,
} from "./CamperItem.styled";
import { ReactComponent as Location } from "../../images/svg/location.svg";
import { ReactComponent as User } from "../../images/svg/users.svg";
import { ReactComponent as Beds } from "../../images/svg/beds.svg";
import { ReactComponent as Transmission } from "../../images/svg/transmission.svg";
import { ReactComponent as Kitchen } from "../../images/svg/kitchen.svg";
import { ReactComponent as Petrol } from "../../images/svg/petrol.svg";
import { ReactComponent as AC } from "../../images/svg/ac.svg";
import { useState } from "react";

export const CamperItem = ({
  advert,
  favorite,
  addFavorite,
  removeFavorite,
}) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalAdvert, setModalAdvert] = useState({});

  const onCloseModal = () => {
    setIsModalActive(false);
  };

  return (
    <>
      {isModalActive && (
        <CamperModal
          adverts={modalAdvert}
          onCloseModal={onCloseModal}
        ></CamperModal>
      )}
      <CLItem id={advert._id}>
        <CamperPhoto src={advert.gallery[0]} alt="Camper photo" />
        <InfoBlock>
          <MainInfoWrap>
            <MainBlock>
              <Title>
                {advert.name}
              </Title>
              <PriceWrap>
                <Price>Є{advert.price.toString().concat(".00")}</Price>
                {favorite?.includes(advert._id) ? (
                  <RedHeartIcon onClick={() => removeFavorite(advert._id)} />
                ) : (
                  <HeartIcon onClick={() => addFavorite(advert._id)} />
                )}
              </PriceWrap>
            </MainBlock>
            <SeconBlockWrap>
              <SeconBlock>
                <StarIcon />
                <Text>
                  <SpanUnderline>
                    {advert.rating}({advert.reviews.length} Reviews)
                  </SpanUnderline>
                </Text>
              </SeconBlock>
              <SeconBlock>
                <Location />
                <Text>{advert.location}</Text>
              </SeconBlock>
            </SeconBlockWrap>
          </MainInfoWrap>
          <MainTextWrap>
            <MainText>{advert.description}</MainText>
          </MainTextWrap>
          <DetailsList>
            <DetailsItem>
              <User />
              {`${advert.adults} adults`}
            </DetailsItem>
            <DetailsItem>
              <Transmission />
              <DetailsSpan>{advert.transmission}</DetailsSpan>
            </DetailsItem>
            <DetailsItem>
              <Petrol />
              <DetailsSpan>{advert.engine}</DetailsSpan>
            </DetailsItem>
            <DetailsItem>
              <Kitchen />
              <DetailsSpan>Kitchen</DetailsSpan>
            </DetailsItem>
            {advert.details.beds ? (
              <DetailsItem>
                <Beds />
                {`${advert.details.beds} beds`}
              </DetailsItem>
            ) : (
              ""
            )}
            <DetailsItem>
              <AC />
              AC
            </DetailsItem>
          </DetailsList>
          <ShowMoreBtn
            type="button"
            onClick={() => {
              setModalAdvert(advert);
              document.querySelector("body").classList.add("no-scroll");
              setIsModalActive(true);
            }}
          >
            Show more
          </ShowMoreBtn>
        </InfoBlock>
      </CLItem>
    </>
  );
};
