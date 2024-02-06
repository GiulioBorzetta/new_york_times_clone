import axios from "axios";
import React, { useEffect, useState } from "react";

const News = () => {
  const key = "v9PSRdpw3WYn0kO0e08zwwImaJ0kXscl";
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const LastNews = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${key}`
      );
      setNews(response.data.results);
      await delay(1000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    LastNews();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 p-4 sm:p-7">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          news.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/4 mt-4 sm:mt-8"
            >
              <h1>{item.title}</h1>
              {item.media &&
                item.media[0] &&
                item.media[0]["media-metadata"] && (
                  <img src={item.media[0][`media-metadata`][2]["url"]} />
                )}
              <h1>{item.abstract}</h1>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default News;
