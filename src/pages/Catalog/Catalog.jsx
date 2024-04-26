import { CamperList } from "components/CamperList";
import { Filter } from "components/Filter";
import { CatalogWrap } from "./Catalog.styled";

export default function Catalog() {
  return (
    <>
      <CatalogWrap>
        <Filter />
        <CamperList />
      </CatalogWrap>
    </>
  );
}
