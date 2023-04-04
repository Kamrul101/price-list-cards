import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-200 rounded-md mt-4 text-center p-4">
        <img className="rounded-md mb-4" src={price.img} alt="" />
      <h2>
        <span className="text-4xl font-extrabold text-purple-800">{price.price}</span>
        <span className="text-2xl font-semibold">/mon</span>
      </h2>
      <h5 className="text-2xl font-semibold">{price.name}</h5>
      <p className="text-left pt-4 text-2xl font-semibold">Features:</p>
      <span className="text-1xl text-left font-semibold ">{
        price.features.map((feature,idx) => <Feature 
                        key={idx}
                        feature ={feature}
            ></Feature>)
      }</span>
    </div>
  );
};

export default PriceCard;
