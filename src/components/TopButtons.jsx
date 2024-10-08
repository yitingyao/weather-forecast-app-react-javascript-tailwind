import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      name: "San Francisco",
    },
    {
      id: 2,
      name: "Beijing",
    },
    {
      id: 3,
      name: "Vancouver",
    },
    {
      id: 4,
      name: "Ottawa",
    },
    {
      id: 5,
      name: "Toronto",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-lg font-bold hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
