import { deleteComment } from "../Api";
import { useContext, useState } from "react";
import { UserContext } from "./UserProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteComment = ({ comment, setComments, setIsCommentDeleted }) => {
  const { user } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    deleteComment(comment.comment_id)
      .then(() => {
        setIsCommentDeleted(true);
        setIsLoading(false);
        setComments((currComments) => {
          const newComments = currComments.filter(
            (currComment) => currComment.comment_id !== comment.comment_id
          );
          return newComments;
        });
      })
      .catch((error) => {
        setIsLoading(false);
        setIsCommentDeleted(false);
        setErrorMessage(
          "Comment was unable to be deleted please try again later"
        );
      });
  };

  if (isLoading) return <p>Deleting comment...</p>;
  if (errorMessage) return <p>{errorMessage}</p>;

  return (
    <div>
      {user !== comment.author ? (
        ""
      ) : (
        <button onClick={() => handleDelete()} className="deletebutton">
          Delete
        </button>
      )}
    </div>
  );
};

export default DeleteComment;
