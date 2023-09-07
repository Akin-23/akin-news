import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle } from "../Api";
import CommentsList from "./CommentsList";
import VotingButtons from "./VotingButtons";
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
      <div>
        <h2>{article.title}</h2>
        <main>
          <p className="author">Author: {article.author}</p>
          <p className="topic">Topic: {article.topic}</p>
          <img className="article-image" src={article.article_img_url} />
          <p className="created_at">Published on: {article.created_at}</p>
          <br/>
          <p className="body">{article.body}</p>
        </main>
        <br />
        <section>
          <VotingButtons
            initialVotes={article.votes}
            article_id={article.article_id}
          />
        </section>
        <br />
        <section>
          <p className="comment_count">Comment Count: {article.comment_count}</p>
          <CommentsList article_id={article_id} />
        </section>
      </div>
    );
  };


export default SingleArticle;
