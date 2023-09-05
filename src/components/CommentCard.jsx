import React from "react";

const CommentCard = ({ comment }) => {
    return (
      <li className="comment">
        <br />

        <h3>{comment.author}</h3>
        <p>{comment.body}</p>
        <p>{comment.votes}</p>
      </li>
    );
};

export default CommentCard;
