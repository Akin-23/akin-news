import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticlesByTopic } from "../Api";
import ArticleCard from "./ArticleCard";

const SingleTopic = () => {
  const { topic } = useParams();
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetchArticlesByTopic(topic)
      .then((data) => {
        setIsLoading(false);

        setFilteredArticles(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [topic]);

   if (isLoading) return <p>Loading...</p>;
 if (isError) {
   return <NotFound />;
  } 
  
  if (filteredArticles.length === 0) {
    return <h2> {topic} : No articles for this topic</h2>
  }


  return (
    <>
      <ul>
        <h2>{topic}</h2>
        {filteredArticles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default SingleTopic;
