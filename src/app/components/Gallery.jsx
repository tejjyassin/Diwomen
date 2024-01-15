import React from "react";

const Gallery = () => {
  return (
    <div className="container mx-auto py-10 md:py-32" id="gallery">
      <h2 className="text-center text-3xl font-extralight leading-8 text-gray-900">
        <span className="text-2xl">Some photos </span>
        <br />
        <span className="mt-1 font-semibold block">
          From our previous event
        </span>
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="block">
          <img
            src="assets/gallery/1.jpg"
            alt=""
            className="rounded-md w-full h-full object-cover"
          />
        </div>

        <div className="block">
          <img
            src="assets/gallery/2.jpg"
            alt=""
            className="rounded-md w-full h-full object-cover"
          />
        </div>

        <div className="block">
          <img
            src="assets/gallery/3.jpg"
            alt=""
            className="rounded-md w-full h-full object-cover"
          />
        </div>

        <div className="block">
          <img
            src="assets/gallery/4.jpg"
            alt=""
            className="rounded-md w-full h-full object-cover"
          />
        </div>

        <div className="block">
          <img
            src="assets/gallery/5.jpg"
            alt=""
            className="rounded-md w-full h-full object-cover"
          />
        </div>

        <div className="block">
          <img
            src="assets/gallery/6.jpg"
            alt=""
            className="rounded-md w-full h-full object-cover"
          />
        </div>

        <div className="block">
          <img
            src="assets/gallery/7.jpg"
            alt=""
            className="rounded-md w-full h-full object-cover"
          />
        </div>

        <div className="block">
          <img
            src="assets/gallery/8.jpg"
            alt=""
            className="rounded-md w-full h-full object-cover"
          />
        </div>

        <div className="block">
          <img
            src="assets/gallery/9.jpg"
            alt=""
            className="rounded-md w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
