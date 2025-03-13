// router-dom
import { Outlet } from "react-router-dom";

// components
import { Header, StairTransition } from "../components";

function MainLayout() {
  return (
    <>
      <Header />
      <StairTransition />
      <main className="main-container">{<Outlet />}</main>
    </>
  );
}

export default MainLayout;
