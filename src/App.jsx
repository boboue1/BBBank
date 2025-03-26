// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Categories from "./components/Categories";
import AddDepenses from "./components/AddDepenses";

function App() {

  return (
    <> 
     <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/expenses" element={<AddDepenses />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
