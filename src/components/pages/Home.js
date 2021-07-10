import React from 'react';
import image from '../pages/Images/pro-1040556.jpg';

export default function Home() {
  return (
    <div>
      <h1>Melanie Elson Portfolio</h1>
      <p>
      <img className="imgcar" src={image} alt="Car on Road"></img>
      </p>

      <p className="HomeTagLine" >Follow me to exiting new ideas!</p>
    </div>
  );
}
