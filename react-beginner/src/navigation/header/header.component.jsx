import React from 'react';
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';
import "./header.styles.css";


export default function Header(){ // functional components here logic and functionalities for our web app 
    return (
        <>
        <header className='title-header'>
            <div className="heading-primary">
                <img src={logo} alt="#" className="logo-img"/>
            </div>
            <ul className='nav-links'>
            <li className='nav-list'>
              <Link to="/home" className='nav-active'>
              Home
            </Link>
         </li>
         <li className='nav-list'>
         <Link to="/commendations" className='nav-active'>
         Commendations
         </Link>
         </li>
         <li className='nav-list'>
         <Link to="/complaints" className='nav-active'>
         Complaints
         </Link>
         </li>
         <li className='nav-list'>
         <Link to="/about" className='nav-active'>
         About us
         </Link>
         </li>
         <li className='nav-list'>
         <Link to="" className='nav-active'>
         Contact us
         </Link>
         </li>
         <li className='nav-list'>
         <Link to="/" className='nav-active'>
         Login
         </Link>
         </li>
            </ul>
        </header>
        
        </>
    );

}