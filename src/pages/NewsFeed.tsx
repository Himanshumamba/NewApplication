import React, { useEffect } from "react";
import { useNewsStore } from "../store/useNewsStore";
import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";

const NewsFeed: React.FC = () => {
  const { articles, loading, fetchNews } = useNewsStore();

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <SearchBar />
      {loading ? (
         <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="news-wrapper">
          {articles.map((article, index) => (
            <NewsCard 
              key={index} 
              title={article.title || article.headline?.main} 
              description={article.description || article.abstract} 
              url={article.url || article.web_url} 
              image={article.urlToImage} 
            />
          ))}
        </div>
      )}
    </div>
  );
  
};

export default NewsFeed;
