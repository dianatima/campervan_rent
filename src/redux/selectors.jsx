import { createSelector } from "@reduxjs/toolkit";

export const getAdverts = (state) => state.adverts.adverts;
export const getAllAdverts = (state) => state.adverts.alladverts;
export const getFilter = (state) => state.filter;
export const getIsLoading = (state) => state.adverts.isLoading;
export const getError = (state) => state.adverts.isError;

export const filteredAdverts = createSelector(
  [getAdverts, getFilter],
  (adverts, filter) => {
    return adverts.filter((advert) => {
      return (
        (filter.details.tv
          ? Boolean(filter.details.tv) === Boolean(advert.details.TV)
          : !filter.details.tv) &&
        (filter.details.airConditioner
          ? Boolean(filter.details.airConditioner) ===
            Boolean(advert.details.airConditioner)
          : !filter.details.airConditioner) &&
        (filter.details.kitchen
          ? Boolean(filter.details.kitchen) === Boolean(advert.details.kitchen)
          : !filter.details.kitchen) &&
        (filter.details.shower
          ? Boolean(filter.details.shower) === Boolean(advert.details.shower)
          : !filter.details.shower) &&
        (filter.details.automatic
          ? advert.transmission === "automatic"
          : !filter.details.automatic) &&
        (filter.details.type
          ? filter.details.type === advert.form
          : !filter.details.type) &&
        advert.location.toLowerCase().includes(filter.location.toLowerCase())
      );
    });
  }
);
