import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./componentes/NavBar"
import ItemListContainer from "./componentes/ItemListContainer"

function App() {

  return (
    <>
      <div className="barra">
        <NavBar />
        
      </div>
      <ItemListContainer mensaje={"ENVIOS A TODO EL MUNDO"} />
      
    </>
  )
}

export default App
