import React from 'react';
import Header from '../../navigation/header/header.component';
import Sidebar from "../../navigation/sidebar/sidebar.component";
import "./complaints.styles.css"

const ComplaintsPage = () => {
    return(
        <>
         <div className="web-page">
           <div>
           <Sidebar/>
           </div>
           <div className="right-view">
             Content goes here 
           </div>
         </div>
        </>
    )
}

export default ComplaintsPage;