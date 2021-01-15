import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Availible Bikes</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-bike.png"
                            text="Description #1"
                            label="Kids"
                        />
                        <CardItem
                            src="images/img-bike.png"
                            text="Description #2"
                            label="Kids"
                        />
                        <CardItem
                            src="images/img-bike.png"
                            text="Description #3"
                            label="Adult"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-bike.png"
                            text="Description #1"
                            label="Kids"
                        />
                        <CardItem
                            src="images/img-bike.png"
                            text="Description #2"
                            label="Kids"
                        />
                    </ul>
                </div>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-bike.png"
                            text="Description #1"
                            label="Kids"
                        />
                        <CardItem
                            src="images/img-bike.png"
                            text="Description #2"
                            label="Kids"
                        />
                        <CardItem
                            src="images/img-bike.png"
                            text="Description #3"
                            label="Adult"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-bike.png"
                            text="Description #3"
                            label="Adult"
                        />
                        <CardItem
                            src="images/img-bike.png"
                            text="Description #2"
                            label="Kids"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;