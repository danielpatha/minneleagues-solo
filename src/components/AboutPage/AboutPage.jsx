import React from 'react';
import "./AboutPage.css";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2 className = "aboutHeader">About</h2>
        <h4>MinneLeagues is a website devoted to the inner athlete and competitor in all of us. <br></br> 
        You are able to browse all competitive levels and find leagues that fit your busy schedule.<br></br> 
        MinneLeagues makes it possibly to find adult rec leagues that are the perfect fit across the Twin Cities and beyond! </h4>

        <h4 className = "underline">Technologies Used</h4>
        <p>HTML</p> 
        <p>CSS</p> 
        <p>JavaScript</p>
        <p>Node.js</p> 
        <p>React</p> 
        <p>SQL</p> 
        <p>Redux</p> 
        <p>Saga</p> 
        <p>Figma</p> 

        <p>React-Share</p> 
       
       <h4 className = "underline"> Special Thanks </h4>
      My friends and family for being supporting and understanding.
      My girlfriend Jess for being there for me.
      And the Ramirez cohort for their support.

       

      </div>
    </div>
  );
}

export default AboutPage;
