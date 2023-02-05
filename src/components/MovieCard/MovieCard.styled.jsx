import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const Bor = styled.p`
    border-bottom: 1px solid orange;
    padding: 20px;
    margin: 0;
`
export const Img = styled.img`
display: flex;
margin-right: auto;
margin-left: auto;
    
`
export const H2= styled.h2`
    text-align:center;
    

`

export const InfoItem = styled.li`
  
    list-style: none;
    margin: 10px 0;
    :hover{
        color: orange;
    }
`
 export const LinkS = styled(NavLink)`
      text-decoration: none;
      color: inherit;
      &.active {
    color: orange;
  }
 `
  