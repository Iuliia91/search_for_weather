import React from 'react'
import styled from 'styled-components'

import Spinner from '../Components/Spinner'

const StyledLoadingLayouts = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: calc(1rem + 2vw);
  display: flex;
  gap: 2rem;
  align-items: center;
`

const LoadingLayouts = () => {
  return (
    <StyledLoadingLayouts>
      <Spinner />
      <h2>Loading</h2>
    </StyledLoadingLayouts>
  )
}

export default LoadingLayouts
