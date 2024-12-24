import React from "react";
import Card1 from "../Photos/Card1.jpg";
import Card2 from "../Photos/Card2.jpg";
import Card3 from "../Photos/Card3.jpg";
import Card4 from "../Photos/Card4.jpg";
import Card5 from "../Photos/Card5.jpg";
import Card6 from "../Photos/Cared6.jpg";
import Dasbord from "./Dasbord";
import ChatList from "./ChatList";

function Header() {
  const cardData = [
    {
      img: Card1,
      Heading: "Whitechapel Rd.",
      Description: "Tulare County, Los Angles, CA 23415",
      Price: "$1,456,654.00",
    },
    {
      img: Card2,
      Heading: "Whitechapel Rd.",
      Description: "Tulare County, Los Angles, CA 23415",
      Price: "$1,456,654.00",
    },
    {
      img: Card3,
      Heading: "Tulare County",
      Description: "Tulare County, Los Angles, CA 23415",
      Price: "$1,456,654.00",
    },
    {
      img: Card4,
      Heading: "Tulare County",
      Description: "Tulare County, Los Angles, CA 23415",
      Price: "$1,456,654.00",
    },
    {
      img: Card5,
      Heading: "Whitechapel Rd.",
      Description: "Tulare County, Los Angles, CA 23415",
      Price: "$1,456,654.00",
    },
    {
      img: Card6,
      Heading: "Whitechapel Rd.",
      Description: "Tulare County, Los Angles, CA 23415",
      Price: "$1,456,654.00",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 ">
      <Dasbord></Dasbord>
      <div className="container mx-auto px-4 mt-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div>
                <img
                  src={card.img}
                  alt={card.Heading}
                  className="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-blue-500 transition-colors duration-300">
                  {card.Heading}
                </h3>
                <p className="text-gray-600 text-lg mb-4">{card.Description}</p>
                <p className="text-xl font-bold text-gray-900">{card.Price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <ChatList />
      </div>
    </section>
  );
}

export default Header;
