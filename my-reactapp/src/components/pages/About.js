import React from 'react';
import image from '../pages/pro-1040556.jpg';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      
      <p>
      <img className="imgcar" src={image} alt="Car on Road"></img>
      I am originally from the East Coast and moved out to Denver to be closer to my family. I currently work as
          a Service Desk Professional for the University of Colorado. I have a Bachelor’s degree in Computer
          Science. I'm currently attending the University of Denver Full Stack Web Development Boot Camp. Highlited are several projects I have
          worked on during the bootcamp as a few examples of my work with coding. Aside from work, I am an avid
          photographer and enjoy taking landscape
          and street photography. I also love hiking with my dogs and spending time with my nieces and nephew.
      </p>
    </div>
  );
}
export default About;
