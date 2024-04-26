import { NavItem } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/catalog">Catalog</NavItem>
      <NavItem to="/favorites">Favorites</NavItem>
    </>
  );
};
