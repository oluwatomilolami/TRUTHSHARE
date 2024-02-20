import React from 'react';
import Header from '../../navigation/header/header.component';
import CustomButton from '../custom-button/button.component';
import image from "../../assets/images/hero.svg";
import divimage from "../../assets/images/tomi.png";
import "./home.styles.css";

const Homepage = () => {
    return(
        <>
        <Header/>
       <div className='first-div'>
       <div>
      <h1 className='truth-head'> Express yourself</h1> 
      <h1 className='truth-head'> Anonymously</h1>
      <p className='truth-para'>
        Are you caught up in the events in your life? Do you feel 
        <br className="hidden-xs" />
      like you need to talk to someone?
      </p>
      <br />
      <CustomButton
      style= {{
        backgroundColor:"#588af0",
        height: "50px",
        width: "25vh",
        color: "white",
        border: "none"
      }}
      >
        read stories 
        </CustomButton> 
        <CustomButton
        style= {{
          backgroundColor:"#a377F0",
          height: "50px",
          width: "25vh",
          color: "white",
          marginLeft: '1.5rem',
          border: "none"
        }}
        >tell your stories</CustomButton>
      {/* <button className='button-truth'> READ STORIES </button>  <button className='buttons-truth'> TELL YOUR STORY </button> */}
       </div>
         {/* second child */}
       <div className='truth-div'>
          <img src={image} alt="#" className="truth-img"/>
       </div>
       </div>

<div class = "main-div">
<div>
    <img src ={divimage} alt="#" className='tomiimage'/>
</div>

<div>
    <h1 className='abouttruth'>About Truthshare</h1>
    <br/>
    <p1 className='paratruthnow'>Getting Counselling can be a bit on the hard side. When you
        <br />
     need someone to talk to about various crisis in your life, from 
     <br/>
     depression to loneliness to things not working. You find that
     <br />
      you either have to go to a church or your parents or friends, 
      <br />
      when you would have preferred to do it quietly or meet a counsellor.
<br/>
<br />
Truthshare is here to help ease depression and improve the 
<br/> 
mental health of Africans. Feel better when you write
<br/>
 anonymously & get access to certified & qualified counsellors</p1>
<br/> 
< br/>  
<CustomButton
        style= {{
          backgroundColor:"#a377F0",
          height: "50px",
          width: "25vh",
          color: "white",
          marginLeft: '1.5rem',
          border: "none"
        }}
        >
            Talk to your counsellor</CustomButton>
</div>
    </div>
       
        </>
    );
}

export default Homepage;