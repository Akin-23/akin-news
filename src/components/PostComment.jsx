import { postComment } from "../Api";
import { useContext, useState } from "react";
import { UserContext } from "./UserProvider";


import React from 'react'

const PostComment = ({ setComments, article_id }) => {
    const { user } = useContext(UserContext);
    const [errorMessage, setErrorMessage] = useState(null);
    const [newBody, setNewComment] = useState("");


      const handleVote = (voteValue) => {

    if (user) {

    }


  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      {!user ? (
        <p>Please log in to comment</p>
      ) : (
        <>
          <button
            onClick={() => handleVote(1)}
            className={voted === 1 ? "voted" : ""}
          >
            Upvote
          </button>

          <button
            onClick={() => handleVote(-1)}
            className={voted === -1 ? "voted" : ""}
          >
            DownVote
          </button>
          <p>Vote: {vote}</p>
        </>
      )}
    </div>
  );
}

export default PostComment