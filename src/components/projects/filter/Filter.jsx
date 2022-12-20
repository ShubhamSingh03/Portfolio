import React, { useState, useEffect } from "react";
import "./filter.css";

// filter data here
const filtersData = [
  {
    name: "Featured",
    id: "featured",
  },
  {
    name: "HTML & CSS",
    id: "html&css",
  },
  {
    name: "Tailwindcss",
    id: "tailwind",
  },
  {
    name: "Javascript",
    id: "js-app",
  },
  {
    name: "React",
    id: "react",
  },
  {
    name: "All",
    id: "all",
  },
];

// filter items component here
const Filter = ({ filterProjects }) => {
  const [active, setActive] = useState("");

  const clickHandler = (id) => {
    setActive(id);
    filterProjects(id);
  };

  useEffect(() => {
    setActive("featured");
  }, []);

  return (
    <div className="filter-component">
      <ul className="filter-menu-items">
        {filtersData.map((item) => {
          return (
            <li
              key={item.id}
              className={`filter-menu-item ${
                active === item.id ? "active" : ""
              }`}
              onClick={() => clickHandler(item.id)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
