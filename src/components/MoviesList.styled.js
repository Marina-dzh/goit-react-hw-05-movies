import styled from '@emotion/styled'

export const Container = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const CardWrapper = styled.div`

  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  display: flex;
    align-items: center;
    justify-content: center;

  > a {
    text-decoration: none;
    color: black;
    :hover{
color: orange;
    }
    
    
  }
  :hover{
    border: 1px solid orange;
    color: orange;
    text-decoration:underline;}
   
`;

export const Name = styled.h3`

  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: inherit;

  
`;
