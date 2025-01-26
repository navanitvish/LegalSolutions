import React from "react";
import { contractData } from "../utils/contractData";

const CardList = () => {
  return (
    <div className="mr-2">
      {contractData.map((item, index) => (
        <div
          className="flex-grow p-4 mb-4 bg-white border border-gray-300 rounded-md"
          key={index}
        >
          <h2 className="mb-4 text-lg font-bold">{item.heading}</h2>
          <div className="space-y-2">
            <div className="h-auto p-2 bg-gray-200 rounded text-start">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
