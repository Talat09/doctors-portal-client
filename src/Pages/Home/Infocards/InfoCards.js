import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import Infocard from "./Infocard";
const InfoCards = () => {
  const cards = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 AM To 5.00 PM",
      icon: clock,
      bgClass: " bg-gradient-to-r from-secondary to-primary",
    },
    {
      id: 2,
      name: "Visit Our Location",
      description: "Agrabaad Access Road,Chattogram",
      icon: marker,
      bgClass: " bg-accent",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "Open 9.00 AM To 5.00 PM",
      icon: phone,
      bgClass: " bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="grid gap-6 mt-8 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 ">
      {cards.map((card) => (
        <Infocard key={card.id} card={card}></Infocard>
      ))}
    </div>
  );
};

export default InfoCards;
