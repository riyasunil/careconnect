import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import ClientReg from './components/ClientReg/ClientReg'
import AuthHome from './pages/AuthHome/AuthHome';
import Login from './pages/Login/Login';
import AuthRoute from './components/AuthRoute';
import Register from './pages/Register/Register';
import ProviderReg from './components/ProviderReg/ProviderReg';

function App() {
  return (
    <>
      <div>
      <Routes>
            <Route element={<AuthRoute />}>
              <Route path="/" element={<AuthHome />} />
              <Route path="/home" element={<AuthHome />} />
  </Route>
            <Route path="/creg" element={<ClientReg />} />
            <Route path="/preg" element={<ProviderReg/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/reg" element= {<Register/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App
