import React from 'react'
import styled from 'styled-components'

const StyledSpinner = styled.div`
  width: calc(1rem + 2vw);
  height: calc(1rem + 2vw);
  border-left: 0.3rem solid white;
  border-bottom: 0.3rem solid white;
  border-right: 0.3rem solid white;
  border-top: 0.3rem solid transparent;
  border-radius: 50%;
  animation: spinner 1s linear infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Spinner = () => {
  return <StyledSpinner></StyledSpinner>
}

export default Spinner
