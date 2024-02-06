import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  if (!props.news || props.news.length === 0) {
    return null;
  }

  const item = props.news[`${props.num}`];

  return (
    <div className="w-full p-4 md:w-8/12 md:p-7">
      <Link to="/details" state={{ data: item }}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0">
            <div key={1} className="md:flex items-center">
              <h1 className="font-bold text-xl font-serif">{item.title}</h1>
              <h1 className="font-serif text-sm">{item.abstract}</h1>
              {item?.multimedia[5] && (
                <img
                  src={
                    "https://www.nytimes.com/" + item?.multimedia[5]?.url || ""
                  }
                  alt="Multimedia"
                  className="w-full md:w-8/12 h-auto md:h-96 ml-0 md:ml-7"
                />
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
