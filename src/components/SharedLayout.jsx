import { Suspense } from "react";
import styled from '@emotion/styled'
import { Outlet, NavLink } from "react-router-dom";
// import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import { Loader } from "./Loader";
const Link = styled(NavLink)`
  color: black;
margin: 10px;
text-decoration:none;
  &.active {
    color: orange;
    text-decoration: underline;
  }
`;
export const SharedLayout = () => {
  return (
    <>
      <header style={{padding:"20px"}}>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<Loader  />}>
        <Outlet />
      </Suspense>
    </>
  );
};


