import { useDispatch } from "react-redux";
import { setLocationFilter, setFormFilter } from "../../redux/filterSlice";
import {
  Wrap,
  FilterWrap,
  LocationTitle,
  Filtername,
  LocationBlock,
  FilterBlock,
  DetailsWrap,
  LocationInput,
  FilterForm,
  FilterTitle,
  InputLabel,
  Input,
  CheckboxItem,
  CheckboxItemVan,
  TextWrap,
  CheckboxItemFully,
  LocationWrap,
  LocationText,
  LocationIcon,
  SearchBtn,
} from "./Filter.styled";
import { ReactComponent as AC } from "../../images/svg/ac.svg";
import { ReactComponent as Transmission } from "../../images/svg/transmission.svg";
import { ReactComponent as Kitchen } from "../../images/svg/kitchen.svg";
import { ReactComponent as TV } from "../../images/svg/tv.svg";
import { ReactComponent as Shower } from "../../images/svg/shower.svg";
import { ReactComponent as Van } from "../../images/svg/van.svg";
import { ReactComponent as Fully } from "../../images/svg/fully.svg";
import { ReactComponent as Alcove } from "../../images/svg/alcove.svg";
import { useEffect } from "react";

export const Filter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setFormFilter({
        airConditioner: false,
        automatic: false,
        kitchen: false,
        tv: false,
        shower: false,
        type: "",
      })
    );
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(setLocationFilter(""));
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFilter = {};
    const data = event.currentTarget.elements;
    data.ac.checked
      ? (newFilter.airConditioner = true)
      : (newFilter.airConditioner = false);
    data.automatic.checked
      ? (newFilter.automatic = true)
      : (newFilter.automatic = false);
    data.kitchen.checked
      ? (newFilter.kitchen = true)
      : (newFilter.kitchen = false);
    data.tv.checked ? (newFilter.tv = true) : (newFilter.tv = false);
    data.shower.checked
      ? (newFilter.shower = true)
      : (newFilter.shower = false);
    data.type.value
      ? (newFilter.type = data.type.value)
      : (newFilter.type = "");
    dispatch(setFormFilter(newFilter));
  };

  return (
    <Wrap>
      <FilterWrap>
        <LocationBlock>
          <LocationTitle>Location</LocationTitle>
          <LocationWrap>
            <LocationInput
              type="text"
              name="filter"
              onChange={(event) =>
                dispatch(setLocationFilter(event.target.value))
              }
            ></LocationInput>
            <LocationText>
              <LocationIcon />
            </LocationText>
          </LocationWrap>
        </LocationBlock>
        <FilterBlock>
          <Filtername>Filters</Filtername>
          <FilterForm onSubmit={handleSubmit}>
            <FilterTitle>Vehicle equipment</FilterTitle>
            <DetailsWrap>
              <Input
                type="checkbox"
                className="custom-checkbox"
                id="ac"
                name="ac"
                value="ac"
              />
              <InputLabel htmlFor="ac">
                <CheckboxItem>
                  <AC />
                  AC
                </CheckboxItem>
              </InputLabel>
              <Input
                type="checkbox"
                className="custom-checkbox"
                id="automatic"
                name="automatic"
                value="automatic"
              />
              <InputLabel htmlFor="automatic">
                <CheckboxItem>
                  <Transmission />
                  Automatic
                </CheckboxItem>
              </InputLabel>
              <Input
                type="checkbox"
                className="custom-checkbox"
                id="kitchen"
                name="kitchen"
                value="kitchen"
              />
              <InputLabel htmlFor="kitchen">
                <CheckboxItem>
                  <Kitchen />
                  Kitchen
                </CheckboxItem>
              </InputLabel>
              <Input
                type="checkbox"
                className="custom-checkbox"
                id="tv"
                name="tv"
                value="tv"
              />
              <InputLabel htmlFor="tv">
                <CheckboxItem>
                  <TV />
                  TV
                </CheckboxItem>
              </InputLabel>
              <Input
                type="checkbox"
                className="custom-checkbox"
                id="shower"
                name="shower"
                value="shower"
              />
              <InputLabel htmlFor="shower">
                <CheckboxItem>
                  <Shower />
                  Shower/WC
                </CheckboxItem>
              </InputLabel>
            </DetailsWrap>
            <FilterTitle>Vehicle type</FilterTitle>
            <DetailsWrap>
              <Input type="radio" id="van" name="type" value="panelTruck" />
              <InputLabel htmlFor="van">
                <CheckboxItemVan>
                  <Van />
                  Van
                </CheckboxItemVan>
              </InputLabel>
              <Input
                type="radio"
                id="fully"
                name="type"
                value="fullyIntegrated"
              />
              <InputLabel htmlFor="fully">
                <CheckboxItemFully>
                  <Fully />
                  <TextWrap>Fully Integrated</TextWrap>
                </CheckboxItemFully>
              </InputLabel>
              <Input type="radio" id="alcove" name="type" value="alcove" />
              <InputLabel htmlFor="alcove">
                <CheckboxItem>
                  <Alcove />
                  Alcove
                </CheckboxItem>
              </InputLabel>
            </DetailsWrap>
            <SearchBtn type="Submit">Search</SearchBtn>
          </FilterForm>
        </FilterBlock>
      </FilterWrap>
    </Wrap>
  );
};
