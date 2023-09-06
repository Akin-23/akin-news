import { useContext, useState } from "react";
import { UserContext } from "./UserProvider";
import { updateVote } from "../Api";

const VotingButtons = ({ initialVotes, article_id }) => {
  const { user } = useContext(UserContext);
  const [vote, setVote] = useState(initialVotes);
  const [voted, setVoted] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);


  const handleVote = (voteValue) => {
    if (user) {
      let newVote = vote;
      let newVoted = voted;

      if (voted === voteValue) {
        newVote -= voteValue;
        newVoted = null;
      } else {
        newVote += voteValue;
        newVoted = voteValue;
      }
      setVote(newVote);
      setVoted(newVoted);

      updateVote(article_id, voteValue)
        .then(() => {})
        .catch((err) => {
          setErrorMessage(
            "There's a problem, your vote has not been accounted for!"
          );
          setVote(initialVotes);
          setVoted(null);
        });
    }
  };

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      {!user ? (
        <p>Please log in to vote</p>
      ) : (
        <>
          <button
            onClick={() =>handleVote(1)}
            className={voted === 1 ? "voted" : ""}
          >
            Upvote
          </button>

          <button
            onClick={()=>handleVote(-1)}
            className={voted === -1 ? "voted" : ""}
          >
            DownVote
            </button>
            <p>Vote: {vote}</p>
        </>
      )}
    </div>
  );
};

export default VotingButtons;
