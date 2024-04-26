import { ReactComponent as User } from "../../images/svg/users.svg";
import { ReactComponent as Beds } from "../../images/svg/beds.svg";
import { ReactComponent as Transmission } from "../../images/svg/transmission.svg";
import { ReactComponent as Kitchen } from "../../images/svg/kitchen.svg";
import { ReactComponent as Petrol } from "../../images/svg/petrol.svg";
import { ReactComponent as AC } from "../../images/svg/ac.svg";
import { ReactComponent as Conditioner } from "../../images/svg/airConditioner.svg";
import { ReactComponent as CD } from "../../images/svg/CD.svg";
import { ReactComponent as Radio } from "../../images/svg/radio.svg";
import { ReactComponent as Hob } from "../../images/svg/hob.svg";
import {
  DetailsList,
  DetailsItem,
  DetailsSpan,
} from "../CamperList/CamperList.styled";
import {
  FeaturesWrap,
  VDWrap,
  VDTitle,
  VDList,
  VDItem,
  VDDetail,
} from "./Features.styled";

export const Features = ({ adverts }) => {
  return (
    <>
      <FeaturesWrap>
        <DetailsList>
          <DetailsItem>
            <User />
            {`${adverts.adults} adults`}
          </DetailsItem>
          <DetailsItem>
            <Transmission />
            <DetailsSpan>{adverts.transmission}</DetailsSpan>
          </DetailsItem>
          <DetailsItem>
            <AC />
            AC
          </DetailsItem>
          <DetailsItem>
            <Petrol />
            <DetailsSpan>{adverts.engine}</DetailsSpan>
          </DetailsItem>
          <DetailsItem>
            <Kitchen />
            <DetailsSpan>Kitchen</DetailsSpan>
          </DetailsItem>
          {adverts.details.beds ? (
            <DetailsItem>
              {" "}
              <Beds />
              {`${adverts.details.beds} beds`}
            </DetailsItem>
          ) : (
            ""
          )}
          {adverts.details.airConditioner ? (
            <DetailsItem>
              {" "}
              <Conditioner />
              {`${adverts.details.airConditioner} air conditioner`}
            </DetailsItem>
          ) : (
            ""
          )}
          {adverts.details.CD ? (
            <DetailsItem>
              {" "}
              <CD />
              CD
            </DetailsItem>
          ) : (
            ""
          )}
          {adverts.details.radio ? (
            <DetailsItem>
              {" "}
              <Radio />
              Radio
            </DetailsItem>
          ) : (
            ""
          )}
          {adverts.details.hob ? (
            <DetailsItem>
              {" "}
              <Hob />
              {`${adverts.details.hob} hob`}
            </DetailsItem>
          ) : (
            ""
          )}
        </DetailsList>
        <VDWrap>
          <VDTitle>Vehicle details</VDTitle>
          <VDList>
            <VDItem>
              <VDDetail>Form</VDDetail>
              <VDDetail>{adverts.form}</VDDetail>
            </VDItem>
            <VDItem>
              <VDDetail>Length</VDDetail>
              <VDDetail>{adverts.length}</VDDetail>
            </VDItem>
            <VDItem>
              <VDDetail>Width</VDDetail>
              <VDDetail>{adverts.width}</VDDetail>
            </VDItem>
            <VDItem>
              <VDDetail>Height</VDDetail>
              <VDDetail>{adverts.height}</VDDetail>
            </VDItem>
            <VDItem>
              <VDDetail>Tank</VDDetail>
              <VDDetail>{adverts.tank}</VDDetail>
            </VDItem>
            <VDItem>
              <VDDetail>Consumption</VDDetail>
              <VDDetail>{adverts.consumption}</VDDetail>
            </VDItem>
          </VDList>
        </VDWrap>
      </FeaturesWrap>
    </>
  );
};
