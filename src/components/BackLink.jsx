import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from '@emotion/styled'

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size:10px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;

  :hover {
    color: orange;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="12" />
      {children}
    </StyledLink>
  );
};