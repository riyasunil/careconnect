import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import ClientReg from './components/ClientReg/ClientReg'
import AuthHome from './pages/AuthHome/AuthHome';
import Login from './pages/Login/Login';
import AuthRoute from './components/AuthRoute';

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
            <Route path="/login" element={<Login />} />
          </Routes>
      </div>
    </>
  )
}

export default App
