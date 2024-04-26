import {
  CatalogWraper,
  CLWraper,
  NoCamperText,
  LoadMoreBtn,
} from "./CamperList.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdverts,
  filteredAdverts,
  getIsLoading,
  getError,
} from "../../redux/selectors";
import { fetchAllAdverts } from "../../redux/advertsOperations";
import { Loader } from "components/Loader/Loader";
import { CamperItem } from "components/CamperItem/CamperItem";

export const CamperList = () => {
  const [page, setPage] = useState(1);
  const [favorite, setFavorite] = useState([]);

  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);

  const dispatch = useDispatch();
  let datalength = 13;

  useEffect(() => {
    dispatch(fetchAllAdverts(1));
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("favoritesArray")) {
      setFavorite(JSON.parse(localStorage.getItem("favoritesArray")));
    }
  }, []);

  const adverts = useSelector(getAdverts);
  const AllFilteredAdverts = useSelector(filteredAdverts);

  const addFavorite = (id) => {
    setFavorite((prev) => {
      if (prev.includes(id)) {
        return [...prev];
      } else {
        localStorage.setItem("favoritesArray", JSON.stringify([...prev, id]));
        return [...prev, id];
      }
    });
  };

  const removeFavorite = (id) => {
    setFavorite((prev) => {
      const filteredPrev = prev.filter((el) => el !== id);
      localStorage.setItem("favoritesArray", JSON.stringify([...filteredPrev]));
      return [...filteredPrev];
    });
  };

  return (
    <>
     
      <CatalogWraper>
        {isLoading && !isError && <Loader />}
        {isError && !isLoading && (
          <NoCamperText>Upsssc... Something goes wrong</NoCamperText>
        )}
        <CLWraper>
          {AllFilteredAdverts.length
            ? AllFilteredAdverts.map((advert) => {
                return (
                  <CamperItem
                    key={advert._id}
                    advert={advert}
                    favorite={favorite}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                  />
                );
              })
            : !isLoading && (
                <NoCamperText>
                  There are no campervans with your filters
                </NoCamperText>
              )}
        </CLWraper>
        {adverts.length < datalength && !isLoading && (
          <LoadMoreBtn
            type="button"
            onClick={() => {
              setPage((prev) => prev + 1);
              dispatch(fetchAllAdverts(page + 1));
            }}
          >
            Load More
          </LoadMoreBtn>
        )}
      </CatalogWraper>
    </>
  );
};
