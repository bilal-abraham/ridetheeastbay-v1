import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Available Bikes</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/bike-1.png"
                            text="Red Royal Baby Bike (14in Tire)"
                            label="Kids"
                        />
                        <CardItem
                            src="images/bike-8.png"
                            text="Green KaZam Walker Bike (12in Tire)"
                            label="Kids"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/bike-9.png"
                            text="Light Blue Electra Hawaii Bike (16in Tire)"
                            label="Kids"
                        />
                        <CardItem
                            src="images/bike-10.png"
                            text="Purple Specialized Bike (20in Tire)"
                            label="Kids"
                        />
                    </ul>
                </div>
            </div>
            <h1>Donated Bikes</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/bike-2.png"
                            text="Blue Raleigh Bike (16in Tire)"
                            label="Donated!"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;