import { useEffect, useState } from "react";
import env from "../config/environment";
import NewsCard from "./newsCard";

function NewsFeed() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function apiCall() {
      const base_url = env.news_app.api;
      const key = env.news_app.key;

      let newsData = await fetch(
        `${base_url}/top-headlines?country=us&apiKey=${key}`
      );
      let res = await newsData.json();
      res.status == "ok" && setNews(res.articles);
    }
    apiCall();
  }, []);

  return (
    <>
      <div>{news.length ? news.map(NewsCard) : <p>Oops No News Now</p>}</div>
    </>
  );
}

export default NewsFeed;
