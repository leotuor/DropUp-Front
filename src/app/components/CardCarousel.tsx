"use client"

import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function CardCarousel() {
  return (
    <div className="flex justify-center items-center w-1/2 mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots
        containerClass="carousel-container"
        itemClass="p-2"
      >
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md text-center text-lg font-semibold">
          Item 1
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md text-center text-lg font-semibold">
          Item 2
        </div>
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md text-center text-lg font-semibold">
          Item 3
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md text-center text-lg font-semibold">
          Item 4
        </div>
      </Carousel>
    </div>
  )
}

export default CardCarousel