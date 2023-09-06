import React from "react";
import { Link } from "react-router-dom";
import VotingButtons from "./VotingButtons"

const ArticleCard = ({ article }) => {
  return (
    <li className="article">
      <Link to={`/articles/${article.article_id}`}>
        <h2>{article.title}</h2>
      </Link>

      <Link to={`/articles/${article.article_id}`}>
        <img src={article.article_img_url} />
      </Link>
      <br />
      <section className="votes">
        <VotingButtons initialVotes={article.votes} article_id={article.article_id}/>
      </section>
    </li>
  );
};

export default ArticleCard;
