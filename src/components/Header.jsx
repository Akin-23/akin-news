import React from 'react'
import { Link } from 'react-router-dom';
import TopicDropDown from './TopicDropDown';

const Header = () => {
  return (
    <header>
      <Link to="/"><h1 >AKIN NEWS</h1></Link>
      <nav>
        <TopicDropDown />
        <Link to="/UserLogin"> User Login </Link>
      </nav>
    </header>
  );
}

export default Header