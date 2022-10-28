import React from 'react'
import { createGlobalStyle } from 'styled-components'
import mountains from '../assets/mountains.svg'
import montserrat from '../assets/fonts/Montserrat.ttf'
const GlobalStyled = createGlobalStyle`
@font-face{
  font-family:'montserrat';
  src:url(${montserrat});
}
:root{
  font-size: 10px;
  --color-primary: hsl(0, 0%, 100%);
  --color-secondary: hsl(0, 0%, 11%);
  --color-secondary-m: hsla(0, 0%, 11%, 0.4);
}
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

#root {
  height:100vh;
  display: grid;
  grid-template-columns:
    [container-start] repeat(12, minmax(min-content, 12.5rem))
    [container-end];
 justify-content: center;
 
background: url(${mountains}),linear-gradient(135deg, #1f4e69 0, #164058 100%);
background-size: cover;
font-family:montserrat;


}

input{
  border:none;
  background-color:transparent;
}

button{
  border:none;
  background-color:transparent;
  color:white;
}

`
const GlobalStyledProvide = () => {
  return (
    <React.Fragment>
      <GlobalStyled />
    </React.Fragment>
  )
}

export default GlobalStyledProvide
