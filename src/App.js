
// import image from "./images/pro-1040556.jpg";
import React from "react";

import './App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/pages/Footer";
// import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <PortfolioContainer />
      {/* <img src={image} alt="Car on Road"></img> */}
      {/* <Form /> */}
      <Footer/>
    </div>
  );
  
}
export default App;

