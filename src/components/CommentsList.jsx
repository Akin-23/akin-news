import React from "react";
import { getComments } from "../Api";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { postComment } from "../Api";
import PostComment from "./PostComment";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getComments(article_id)
      .then((data) => {
        setIsLoading(false);
        setComments(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something has gone wrong!</p>;

  return (
    <section className="comments">
      <PostComment setComments={setComments} article_id={article_id} />
      <ul className="comments-list">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
  );
};

export default CommentsList;
