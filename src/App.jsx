import React from 'react'
import GlobalStyledProvide from './HOC/GlobalStyledProvider'
import GlobalModalProvider from './HOC/GlobalModalProvider'
import InitialLayouts from './Layouts/InitialLayouts'

function App() {
  return (
    <>
      <GlobalStyledProvide />
      <GlobalModalProvider>
        <InitialLayouts />
      </GlobalModalProvider>
    </>
  )
}

export default App
