import Header from "../Header";
import Cart from "../Cart/Cart";
import { Outlet } from "react-router-dom";
import { ITokenProps } from "../../common/types";

const Layout = ({ token, setToken }: ITokenProps) => {
  return (
    <>
      <Header token={token} setToken={setToken} />
      <Cart />
      <Outlet />
    </>
  );
};

export default Layout;
