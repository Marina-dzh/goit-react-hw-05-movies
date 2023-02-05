import styled from '@emotion/styled'
import { BiSearchAlt } from "react-icons/bi";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  align-items: center;
  margin-bottom: 10px;
`
// export const Wrapper = styled.form`
//   display: inline-flex;
//   align-items: center;
//   position: relative;
//   margin-bottom: 16px;
//   text-transform: uppercase;
// `;

export const Input = styled.input`
  display: inline-block;
  width: 300px;
  font: inherit;
  font-size: 20px;
  border: 1 solid black;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  
`;

export const Icon = styled(BiSearchAlt)`
  width: 20px;
  height: 20px;
 
  right: 6px;
  :hover{
    color: orange;
  }
`;
