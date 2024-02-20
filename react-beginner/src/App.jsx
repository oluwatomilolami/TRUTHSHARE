import React, { useState } from 'react';
import { Route , Routes } from 'react-router-dom';
import Homepage from './components/home /home.component';
import CommendationPage from './components/comendations/commendations.component';
import AboutUs from './components/about us /about us.component';
import ComplaintsPage from './components/complaints/complaints.commendation';
import RegisterPage from './Authentication/signup/signup.component';
import LoginPage from './Authentication/login/login.component';
import {AuthProvider} from "./Authentication/context/authcontext";
import './App.css';

function App() {
  
  return (
    <>
      <AuthProvider>
      <Routes>
       <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<Homepage/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/commendations' element={<CommendationPage/>} />
        <Route path='/complaints' element={<ComplaintsPage/>} />
        <Route path='/signup' element={<RegisterPage/>}/>
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App
