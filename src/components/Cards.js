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
                            text="Red Royal Baby Bike (14 inch Tire)"
                            label="Kids"
                        />
                        <CardItem
                            src="images/bike-3.png"
                            text="Green KaZam Walker Bike (12 inch Tire)"
                            label="Kids"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/bike-4.png"
                            text="Light Blue Electra Hawaii Bike (16 inch Tire)"
                            label="Kids"
                        />
                        <CardItem
                            src="images/bike-5.png"
                            text="Purple Specialized Bike (20 inch Tire)"
                            label="Kids"
                        />
                        <CardItem
                            src="images/bike-6.png"
                            text="Honda Racing Kids Mountain Bike (20 inch Tire)"
                            label="Kids"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/bike-7.png"
                            text="Black Upland Kids Bike (12 inch Tire)"
                            label="Kids"
                        />
                        <CardItem
                            src="images/bike-8.png"
                            text="Pink Trek Kids Bike (16 inch Tire)"
                            label="Kids"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/bike-9.png"
                            text="Purple Huffy Kids Bike (14 inch Tire)"
                            label="Kids"
                        />
                        <CardItem
                            src="images/bike-10.png"
                            text="Purple Specialized Bike (20 inch Tire)"
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
                            text="Blue Raleigh Bike (16 inch Tire)"
                            label="Donated!"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;