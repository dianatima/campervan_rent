import { fetchAdverts } from "../../redux/advertsOperations";
import { FavoritesWrap } from "./Favorites.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdverts, getIsLoading, getError } from "../../redux/selectors";
import { NoCamperText } from "../../components/CamperList/CamperList.styled";
import { Loader } from "components/Loader/Loader";
import { CamperItem } from "components/CamperItem/CamperItem";

export default function Favorites() {
  const [allFavorite, setAllFavorite] = useState([]);

  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("favoritesArray")) {
      setAllFavorite(JSON.parse(localStorage.getItem("favoritesArray")));
    }
  }, []);

  const removeFavorite = (id) => {
    setAllFavorite((prev) => {
      const filteredPrev = prev.filter((el) => el !== id);
      localStorage.setItem("favoritesArray", JSON.stringify([...filteredPrev]));
      return [...filteredPrev];
    });
  };

  const allAdverts = useSelector(getAllAdverts);

  return (
    <FavoritesWrap>
      {isLoading && !isError && <Loader />}
      {isError && !isLoading && (
        <NoCamperText>Upsssc... Something goes wrong</NoCamperText>
      )}
      {!isLoading && (
        <>
          {allFavorite.length ? (
            allAdverts
              .filter((advert) => allFavorite.includes(advert._id))
              .map((advert) => {
                return (
                  <CamperItem
                    key={advert._id}
                    advert={advert}
                    favorite={allFavorite}
                    removeFavorite={removeFavorite}
                  />
                );
              })
          ) : (
            <NoCamperText>
              Please go to the Catalog and choose the campervan you like
            </NoCamperText>
          )}
        </>
      )}
    </FavoritesWrap>
  );
}
