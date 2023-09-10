import React from "react";
import DeleteComment from "./DeleteComment";

const CommentCard = ({ comment, setComments, setIsCommentDeleted }) => {

  return (
    <li className="comment">
      <br />
      <h3 className="author-name">{comment.author}</h3>
      <p>{comment.body}</p>
      <p>Vote Count : {comment.votes}</p>
      <DeleteComment
        comment={comment}
        setComments={setComments}
        setIsCommentDeleted={setIsCommentDeleted}
      />
    </li>
  );
};

export default CommentCard;
