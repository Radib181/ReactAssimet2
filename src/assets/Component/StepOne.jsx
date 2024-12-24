import React from 'react';
import {Button} from "@mui/material"
import Group1 from "../Photos/Group1.png";
import Frame1 from '../Photos/Frame (1).png';
import Frame2 from '../Photos/Frame (2).png';
import Frame3 from '../Photos/frame.png';
import Dasbord from './Dasbord';

function Step() {
  const CardDetails = [
    {
      img: Frame1,
      title: "What type of incident?",
      description: 'Choose the category that best describes the incident.',
    },
    {
      img: Frame2,
      title: "Tell us about the incident?",
      description: 'Let’s connect the dots and see where to start.',
    },
    {
      img: Frame3,
      title: "Where did the incident occur?",
      description: 'Provide details about the location of the incident.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <Dasbord></Dasbord>
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Let’s get started
          </h1>
          <p className="text-gray-600 mt-6 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.
          </p>
        </div>

        {/* Main Image */}
        <div className="flex justify-center mt-10">
          <img className="max-w-full h-auto" src={Group1} alt="Main graphic" />
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-10 h-[270px]">
          {CardDetails.map((card, index) => (
            <div
              key={index}
              className="relative bg-[#ddd] rounded-lg overflow-hidden  transition-transform transform hover:scale-105 group"
            >
              {/* Linear Gradient Border */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#e0f7fa] via-[#f3e5f5] to-[#ffe0e0] rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              ></div>
              <div className="relative z-10 p-6 text-center border border-transparent rounded-lg group-hover:border-transparent group-hover:shadow-md transition-all duration-300 ease-in-out">
                <div className="overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-14 h-14 items-start mx-auto mb-4 group-hover:w-20 group-hover:h-20 transition-all duration-300 ease-in-out"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center items-start mx-auto mt-24'>
        <Button
      variant="contained"
      sx={{
        backgroundColor: '#ef5350', // Red color
        borderRadius: '20px', // Rounded corners
        padding: '10px 20px', // Optional: Adjust padding
        '&:hover': {
          backgroundColor: '#d32f2f', // Darker red on hover
        },
      }}
    >
      Get Started
    </Button>
        </div>
      </div>
    </section>
  );
}

export default Step;
