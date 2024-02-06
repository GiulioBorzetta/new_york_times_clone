import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  if (!props.news || props.news.length === 0) {
    return null;
  }

  const item = props.news[`${props.num}`];

  return (
    <div
      key={1}
      className="w-full md:w-4/12 ml-0 md:ml-3 border border-r-0 border-t-0 border-b-0 border-l-1 mb-5  md:border-l-black p-4 md:p-3"
    >
      <Link to="/details" state={{ data: props?.news[`${props.num}`] }}>
        <div>
          {item.multimedia.length > 0 && (
            <img
              src={"https://www.nytimes.com/" + item.multimedia[4].url}
              alt="images"
              className="w-full h-48 md:w-80 md:h-60"
            />
          )}
          <h1 className="text-lg md:text-2xl font-medium font-serif mt-4 md:mt-7">
            {item.title}
          </h1>
          <h1 className="text-sm font-serif">{item.abstract}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
