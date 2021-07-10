import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import image1 from '../pages/Images/screenshotgitmusic.png';
import image2 from '../pages/Images/5Oclock.png';
import image3 from '../pages/Images/StartQuiz.png';
import image4 from '../pages/Images/screenshotPWGenerator.png';

export default function Project() {
  return (
    <div >
      <Container>
      <h1>Project Page</h1>
   
   
    
    <p className="imgc">
        
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image1" src={image1} />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
     
    </Card.Text>
    <Button variant="primary" href="https://github.com/MelElson/Git-Music-Now-Project">Git Music Now</Button>
  </Card.Body>
</Card>
      
      </p>
 
     

      
     
      <p className="imgc">
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image1" src={image2} />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
     </Card.Text>
    <Button variant="primary" href="https://github.com/MelElson/5-0-Clock-Drink-Generator">5 O'Clock Somewhere</Button>
  </Card.Body>
</Card>
         </p>
      
   

      <p>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image1" src={image3} />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
     
    </Card.Text>
    <Button variant="primary" href="https://melelson.github.io/Coding-Quiz-Challenge/">Quiz</Button>
  </Card.Body>
</Card>

        
      </p>
      <p>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image1" src={image4} />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
     
    </Card.Text>
    <Button variant="primary" href="https://melelson.github.io/03HW-JS-Password-Generator/">Password Generator</Button>
  </Card.Body>
</Card>

        
      </p>
      </Container>
    </div>
    
    
  );
}
