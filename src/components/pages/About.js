import React from 'react';
import './About.css';
import image2 from '../pages/Images/MEE6713.jpg';
import Card from 'react-bootstrap/Card';
function About() {
  return (
    <div>
      <h1>About Page</h1>
      
      <p>
      <Card style={{ width: '18rem'}}>
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
    I am originally from the East Coast and moved out to Denver to be closer to my family. I currently work as
          a Service Desk Professional for the University of Colorado. I have a Bachelor’s degree in Computer
          Science. I'm currently attending the University of Denver Full Stack Web Development Boot Camp. Highlited are several projects I have
          worked on during the bootcamp as a few examples of my work with coding. Aside from work, I am an avid
          photographer and enjoy taking landscape
          and street photography. I also love hiking with my dogs and spending time with my nieces and nephew.
    </Card.Text>
    
    </Card.Body>
    </Card>
   
      </p>
      <p>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image1" src={image2} />
  <Card.Body>
    <Card.Title>Melanie Elson</Card.Title>
    <Card.Text>
     
    </Card.Text>
   
  </Card.Body>
</Card>

       
      </p>
    </div>
  );
}
export default About;
