import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../Api";
import { getArticle } from "../Api";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getArticle(article_id)
      .then((data) => {
        setIsLoading(false);
        setArticle(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something has gone wrong!</p>;

  return (
    <div>
      <h2>{article.title}</h2>
      <main>
        <img className="article-image" src={article.article_img_url} />
        <p className="author">{article.author}</p>
        <p className="body">{article.body}</p>
      </main>
    </div>
  );
};

export default SingleArticle;
