import React from "react";
import { Link } from "react-router-dom";

const News = (props) => {
  return (
    <>
      <h1 ref={props?.searchRef} className="text-base font-bold ml-7 mt-4">
        SEARCH
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 p-4 sm:p-7">
        {props?.apiUp
          ?.filter((data) =>
            data?.lead_paragraph
              ?.toLowerCase()
              .includes(props?.search?.toLowerCase())
          )
          .map((data, index) => (
            <Link key={index} to="/details" state={{ data: data }}>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/4 mt-4 sm:mt-8">
                {data?.multimedia[0]?.url && (
                  <img
                    src={"https://www.nytimes.com/" + data?.multimedia[0]?.url}
                    className="w-full h-auto"
                    alt="News"
                  />
                )}
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mt-2">
                  {data.abstract}
                </h1>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default News;
