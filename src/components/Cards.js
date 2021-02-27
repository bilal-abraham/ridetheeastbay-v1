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
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/bike-4.png"
                            text="Light Blue Electra Hawaii Bike (16 Inch Tire)"
                            label="Kids"
                        />
                        <CardItem
                            src="images/bike-5.png"
                            text="Purple Specialized Bike (20 Inch Tire)"
                            label="Kids"
                        />
                        <CardItem
                            src="images/bike-6.png"
                            text="Honda Racing Kids Mountain Bike (20 Inch Tire)"
                            label="Kids"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/bike-8.png"
                            text="Pink Trek Kids Bike (16 Inch Tire)"
                            label="Kids"
                        />
                        <CardItem
                            src="images/bike-11.png"
                            text="Giant Kids Bike (L Frame / 26 Inch Tire)"
                            label="Kids"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/bike-13.png"
                            text="Red Specialized Hotrock Bike (24 Inch Tire)"
                            label="Kids"
                        />
                        <CardItem
                            src="images/bike-15.png"
                            text="Lime Holeshot Bike (24 Inch Tire)"
                            label="Kids"
                        />
                        <CardItem
                            src="images/bike-16.png"
                            text="Red Hoffman Bike 1 (10 Inch Tire / 8 - 9 Inch Frame)"
                            label="Kids"
                        />
                        <CardItem
                            src="images/bike-17.png"
                            text="Red Hoffman Bike 2 (10 Inch Tire / 8 - 9 Inch Frame)"
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
                            src="images/bike-3.png"
                            text="Green KaZam Walker Bike (12 Inch Tire)"
                            label="Donated!"
                        />
                        <CardItem
                            src="images/bike-1.png"
                            text="Red Royal Baby Bike (14 Inch Tire)"
                            label="Donated!"
                        />
                        <CardItem
                            src="images/bike-2.png"
                            text="Blue Raleigh Bike (16 Inch Tire)"
                            label="Donated!"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/bike-7.png"
                            text="Black Upland Kids Bike (12 Inch Tire)"
                            label="Donated!"
                        />
                        <CardItem
                            src="images/bike-9.png"
                            text="Purple Huffy Kids Bike (14 Inch Tire)"
                            label="Donated!"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/bike-10.png"
                            text="Blue Huffy Kids Bike (16 Inch Tire)"
                            label="Donated!"
                        />
                        <CardItem
                            src="images/bike-12.png"
                            text="Trek Alpha 6700 ZX Bike (18 Inch /XS Frame/ 26 Inch Tire)"
                            label="Donated!"
                        />
                        <CardItem
                            src="images/bike-14.png"
                            text="Black Trek Mountain Track 830 Bike (26 Inch Tire)"
                            label="Donated!"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;