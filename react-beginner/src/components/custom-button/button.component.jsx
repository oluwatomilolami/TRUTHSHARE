import React from 'react';
import "./button.styles.css";

const CustomButton = ({children, label, ...otherProps }) => (
    <button
    type= "submit"
    className={`${label ? "label" :""}custom-button`}
    {...otherProps}>
     {children}
    </button>   
);
export default CustomButton;