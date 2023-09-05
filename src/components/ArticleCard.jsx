import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <li className="article">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} />
      <br/>
    </li>
  );
};

export default ArticleCard;
