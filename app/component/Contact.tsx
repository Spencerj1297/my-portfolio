import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row lg:gap-4 justify-center items-center">
        <div className="flex flex-col min-h-96 w-full lg:w-3/6 p-4 gap-8 justify-center items-center lg:border-r">
          <h3 className="text-customGrey text-4xl">Contact Me</h3>
          <input className="p-2 w-3/5 rounded-lg" placeholder="name"></input>
          <p className="text-center text-customGrey">and</p>
          <input className="p-2 w-3/5 rounded-lg" placeholder="email"></input>
        </div>
        <div className="lg:min-h-96 w-full flex justify-center items-center lg:w-3/6 lg:p-4">
          <textarea className="bg-elegantPink text-white text-xl bg-opacity-20 w-4/5 h-52 lg:h-96 p-4 rounded-xl"></textarea>
        </div>
      </div>
      {/* <div className="min-h-96 min-w-96 bg-customGrey"></div> */}
    </>
  );
};
