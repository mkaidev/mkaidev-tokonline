import React from "react";
import { CgClose } from "react-icons/cg";

const DisplayImage = ({ imgUrl, onClose }) => {
  return (
    <div className="fixed bottom-0 top-0 right-0 left-0 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded max-w-5xl mx-auto p-4 mt-2">
        <div
          className="w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer"
          onClick={onClose}
        >
          <CgClose />
        </div>

        <div className="flex justify-center p-4 overflow-y-scroll max-w-[70vh] max-h-[70vh]">
          <img src={imgUrl} className="w-full h-full" alt="product" />
        </div>
      </div>
    </div>
  );
};

export default DisplayImage;