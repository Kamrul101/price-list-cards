import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <li className="text-semibold text-2xl mr-12 hover:bg-purple-200">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
