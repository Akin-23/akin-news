import React from "react";
import { Link } from "react-router-dom";
import VotingButtons from "./VotingButtons";
import { useContext } from "react";
import { TopicContext } from "./TopicProvider";

const ArticleCard = ({ article }) => {
  const { currentTopic, setTopic } = useContext(TopicContext);

  return (
    <>
      <div className="article-container">
      <li className="article-list">
        <Link
          to={`/articles/${article.article_id}`}
          onClick={() => setTopic("")}
        >
          <h2 className="article-header">{article.title}</h2>
        </Link>

        <Link
          to={`/articles/${article.article_id}`}
          onClick={() => setTopic("")}
        >
          <img
            className="article-image"
            src={article.article_img_url}
            alt={`article img for ${article.article_id}`}
          />
        </Link>
        <section className="votes">
          <VotingButtons
            initialVotes={article.votes}
            article_id={article.article_id}
          />
          <br />
        </section>
      </li>
      </div>
    </>
  );
};

export default ArticleCard;
