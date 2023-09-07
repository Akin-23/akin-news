import React from "react";
import { getComments } from "../Api";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCommentDeleted, setIsCommentDeleted] = useState(false);

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
    <>
      <section className="comments">
        <PostComment
          setComments={setComments}
          article_id={article_id}
          setIsCommentDeleted={setIsCommentDeleted}
        />
        <ul className="comments-list">
          {comments.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                setComments={setComments}
                setIsCommentDeleted={setIsCommentDeleted}
              />
            );
          })}
        </ul>
      </section>
      {isCommentDeleted
        ? toast.success("Comment succesfully deleted!", {
            toastId: "delete",
          })
        : null}
      <ToastContainer />
    </>
  );
};

export default CommentsList;
