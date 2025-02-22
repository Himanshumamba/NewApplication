import React from "react";

interface NewsCardProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, url, image }) => {
  return (

    <div className="news-card">
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
    </div>

  );
};

export default NewsCard;
