import React from "react";
import "./FormComponent.css";

const FormComponent = () => {
  return (
    <div className="contain">
    <header className="h">
      <p className="st">3/3</p>
      <h2 className="head">Almost there!</h2>
      <hr className="l"></hr>
    </header>

    <main className="main">
        <div className="profile"></div>
        <div box1>
        <p className="date">Date of Birth</p>
        <input type="text" placeholder="yyyy-mm-dd" className="dob"></input>
        <p className="street">Street Address</p>
        <input type="text" placeholder="Address" className="street-input"></input>
      <div className="box2">
        <div>
        <p className="pin">PIN</p>
        <input type="text" placeholder="pincode" className="pin-input"></input>
        </div>
       <div>
       <p className="city">City</p>
       <input type="text" placeholder="City" className="city-input"></input>
       </div>
      </div>
        </div>
    </main>
    <footer className="foot">
          <button className="btn">REVIEW PROFILE</button>
    </footer>
  </div>
  );
};

export default FormComponent;