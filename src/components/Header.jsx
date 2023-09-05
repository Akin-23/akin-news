import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import TopicDropDown from './TopicDropDown';
import { UserContext } from "./UserProvider";


const Header = () => {


  const { user , isLoggedIn } = useContext(UserContext) 
  return (
    <header>
      <Link to="/">
        <h1>AKIN NEWS</h1>
      </Link>
      {isLoggedIn() && (
        <p className="user_text">
          Logged in as {user}
        </p>
      )}

      <nav>
        <TopicDropDown />
        <Link to="/UserLogin"> User Login </Link>
      </nav>
    </header>
  );
}

export default Header