import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Welcome from './pages/Welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/welcome" element={<Welcome />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App