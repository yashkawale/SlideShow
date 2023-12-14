import React from "react";

const Button = ({onClick, label}) => {
  return (
    <>
        <div className="flex flex-col items-center justify-center">
            <button className="bg-green-500 border-black border-2 text-lg rounded-lg p-2 hover:bg-gray-200" onClick={onClick}>{label}</button>
        </div>
    </>
  )
};

export default Button;
