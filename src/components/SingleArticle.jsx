import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle } from "../Api";
import CommentsList from "./CommentsList";
import VotingButtons from "./VotingButtons";
import { capitalisingFirstLetter, formatTime } from "../functions";

import NotFound from "./NotFound";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id)
      .then((data) => {
        setIsLoading(false);
        data.topic = capitalisingFirstLetter(data.topic);
        data.created_at = formatTime(data.created_at);
        setArticle(data);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <NotFound />;
  } 

  

    return (
      <div className="articlepage">
        <h2 className="article-title">
          <b>{article.title}</b>
        </h2>
        <br/>
        <main>
          <img className="articlepage-image" src={article.article_img_url} />

          <p className="created_at">Published on: {article.created_at}</p>
          <p className="author">Author: {article.author}</p>
          <p className="topic">Topic: {article.topic} </p>
          <br />
          <p className="body">{article.body}</p>
        </main>
        <br />
        <section className="votsection">
          <VotingButtons
            initialVotes={article.votes}
            article_id={article.article_id}
          />
        </section>
        <br />
        <section>
          <p className="comment_count">{article.comment_count} comments</p>
          <CommentsList article_id={article_id} />
        </section>
      </div>
    );
  };


export default SingleArticle;
