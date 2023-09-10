import  { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from "./UserProvider";
import { TopicContext } from "./TopicProvider";




const Header = () => {


  const { user, isLoggedIn, userImage } = useContext(UserContext); 
  const { setTopic } = useContext(TopicContext); 

  return (
    <header className="header">
      <div className="userlogo-container">
        <Link to="/UserLogin" onClick={() => setTopic("")}>
            <img
              src="src/assets/favicon.png"
              alt="favicon user logo"
              className="userlogin"
            />
        </Link>
      </div>
      <div className="logobox">
        <Link to="/" onClick={() => setTopic("")}>
          <img
            className="akin-news-logo"
            src="src/assets/AKINNEWSLogo.png"
            alt="akin-news logo"
          />
        </Link>
      </div>

      {isLoggedIn() && <p className="user_text">Logged in as {user} <img src={userImage} alt={`${user} avatar`} className="avatarimage" /></p> }
    </header>
  );
}

export default Header