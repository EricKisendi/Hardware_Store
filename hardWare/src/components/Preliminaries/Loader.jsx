// import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative flex items-center justify-center w-12 h-12">
        <div className="newtons-cradle__dot bg-gray-600 rounded-full absolute w-3 h-3 origin-top animate-swing"></div>
        <div className="newtons-cradle__dot bg-gray-600 rounded-full absolute w-3 h-3 origin-top animate-swing2"></div>
        <div className="newtons-cradle__dot bg-gray-600 rounded-full absolute w-3 h-3 origin-top animate-swing"></div>
        <div className="newtons-cradle__dot bg-gray-600 rounded-full absolute w-3 h-3 origin-top animate-swing2"></div>
      </div>
    </div>
  );
};

export default Loader;
