import React, { useState } from 'react'
import styled from 'styled-components'

export const ModalContext = React.createContext()

const StyledGlobalModalProvider = styled.div`
  position: absolute;
  overflow: hidden;
  top: 4rem;
  right: 0rem;
  z-index: 9000;
  width: 100%;
  height: 10rem;

  .modal {
    background-color: #609094;
    position: absolute;
    padding: 3rem 10rem;
    right: 1px;
    color: #f10101ab;
  }

  .modal > p {
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    top: 0.5rem;
    height: 5rem;
    .modal {
      padding: 1rem 6rem;
    }
  }
`

const GlobalModalProvider = (props) => {
  const [modalContext, setModalContext] = useState()

  return (
    <React.Fragment>
      {!!modalContext && (
        <StyledGlobalModalProvider>
          <div className="modal">
            <p onClick={() => setModalContext()}>X</p>
            <div className="border">{modalContext}</div>
          </div>
        </StyledGlobalModalProvider>
      )}

      <ModalContext.Provider value={setModalContext}>
        {props.children}
      </ModalContext.Provider>
    </React.Fragment>
  )
}

export default GlobalModalProvider
