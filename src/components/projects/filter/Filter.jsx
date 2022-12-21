import React, { useState, useEffect, useRef } from "react";
import "./filter.css";
import Aos from "aos";
import "aos/dist/aos.css";

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
  const isInitialMount = useRef(true);

  const clickHandler = (id) => {
    setActive(id);
    filterProjects(id);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      setActive("featured");
    } else {
      Aos.refresh();
    }
  }, []);

  return (
    <div className="filter-component">
      <ul
        className="filter-menu-items"
        data-aos="flip-down"
        data-aos-duration="700"
      >
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
