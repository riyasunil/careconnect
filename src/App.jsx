
import { Route, Routes } from "react-router-dom";
{/*import { useState } from 'react'

import AuthHome from './pages/AuthHome/AuthHome';

import AuthRoute from './components/AuthRoute';
import Home from './pages/Home/Home';
import MainRoutes from './Routes/MainRoutes';*/}
import Home from './pages/Home/Home';
import Navbar from "./pages/navbar/Navbar";
import ClientReg from './components/ClientReg/ClientReg';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <div className ="app">
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/creg" element={<ClientReg />} />
            <Route path="/login" element={<Login />} />
  
           
 
      
      
      {/*<Routes>
            <Route element={<AuthRoute />}>
              <Route path="/" element={<AuthHome />} />
              <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/creg" element={<ClientReg />} />
           
  </Routes>*/}
        </Routes>
      </div>
    </>
  )
}

export default App
