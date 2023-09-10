import { useContext, useState } from "react";
import { UserContext } from "./UserProvider";
import { updateVote } from "../Api";
import { Link } from "react-router-dom";

const VotingButtons = ({ initialVotes, article_id }) => {
  const { user } = useContext(UserContext);
  const [vote, setVote] = useState(initialVotes);
  const [voted, setVoted] = useState(null); 
  const [errorMessage, setErrorMessage] = useState(null);
  const [isVotingDisabled, setIsVotingDisabled] = useState(false);

  const handleVote = (voteValue) => {
    if (user && !isVotingDisabled) {
      if (voted === voteValue) {
        return;
      }
      let newVote = vote;
      let newVoted = voted;
     
      newVote += voteValue;
      newVoted = voteValue;

      setVote(newVote);
      setVoted(newVoted);
      setIsVotingDisabled(true);
      console.log(vote);

      updateVote(article_id, voteValue)
        .then(() => {
          setIsVotingDisabled(false);
        })
        .catch((err) => {
          setErrorMessage(
            "There's a problem, your vote has not been accounted for!"
          );
          setVote(initialVotes);
          setVoted(null);
          setIsVotingDisabled(false);
        });
    }
  };

  return (
    <div className="votebuttons">
      <p>Vote Count : {vote}</p>

      {errorMessage && <p>{errorMessage}</p>}
      {!user ? (
        <Link to="/UserLogin">
          <p>Please log in to vote</p>
        </Link>
      ) : (
        <>
          <button
            onClick={() => handleVote(1)}
            className={voted === 1 ? "voted" : "upvote"}
            disabled={isVotingDisabled}
          >
            UpVote
          </button>

          <button
            onClick={() => handleVote(-1)}
            className={voted === -1 ? "voted" : "downvote"}
            disabled={isVotingDisabled}
          >
            DownVote
          </button>
        </>
      )}
    </div>
  );
};

export default VotingButtons;
