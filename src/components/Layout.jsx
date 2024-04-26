import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBarTop } from "./AppBar/AppBar";

export const Layout = () => {
  return (
    <>
      <AppBarTop />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
