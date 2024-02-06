import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Search from "./Search";
import Footer from "./Footer";
import axios from "axios";
import News from "./News";

const Main = () => {
  const key = "v9PSRdpw3WYn0kO0e08zwwImaJ0kXscl";
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [news, setNews] = useState([]);
  const [menu, setMenu] = useState("");
  const [search, setSearch] = useState("");
  const [apiUp, setApiUp] = useState([]);

  const searchRef = useRef(null);

  const getNews = async () => {
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${
          search || menu || "politics"
        }&api-key=${key}`
      );

      if (
        response.data &&
        response.data.response &&
        response.data.response.docs
      ) {
        setNews(response.data.response.docs);
      } else {
        console.error(response.data);
      }

      await delay(1000);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getNews();
  }, [menu]);

  return (
    <div className="p-7 md:ml-60 md:mr-60">
      <NavBar
        searchRef={searchRef}
        setMenu={setMenu}
        setSearch={setSearch}
        search={search}
        setApiUp={setApiUp}
        className
      />
      <div className="flex ">
        <Home news={news} num="0" />
        <Sidebar news={news} num="5" />
      </div>
      <hr className="border-black" />
      <div className="flex mt-3">
        <Home news={news} num="1" />
        <Sidebar news={news} num="6" />
      </div>
      <hr className="border-black" />
      <div className="flex mt-3">
        <Home news={news} num="2" />
        <Sidebar news={news} num="7" />
      </div>
      <hr className="border-black" />
      <div className="flex mt-3">
        <Home news={news} num="3" />
        <Sidebar news={news} num="8" />
      </div>
      <hr className="border-black" />
      <div className="flex mt-3">
        <Home news={news} num="4" />
        <Sidebar news={news} num="9" />
      </div>
      <hr className="mt-1 border-black" />
      <hr className="mt-1 border-black" />
      <News />
      <hr className="mt-1 border-black" />
      <hr className="mt-1 border-black" />
      <Search searchRef={searchRef} search={search} apiUp={apiUp} />
      <Footer setMenu={setMenu} />
    </div>
  );
};

export default Main;
