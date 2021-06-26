import React from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import "./Card.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic Website</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem
              src="images/desk1.jpg"
              text="Explore the hidden websies here"
              label="Advertise"
              path="/services"
            />

            <CardItem
              src="images/desk1.jpg"
              text="Explore the hidden websies here"
              label="Advertise"
              path="/services"
            />

            <CardItem
              src="images/desk1.jpg"
              text="Explore the hidden websies here"
              label="Advertise"
              path="/services"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
