import React from 'react'
import { useState, useEffect } from 'react';
import { getTopics } from "../Api";
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import { Link } from "react-router-dom";



const TopicDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topics, setTopics] = useState([]);

    useEffect(() => {
      getTopics()
        .then((data) => {
          setTopics(data);
        })
        .catch((err) => {
        });
    }, []);
  


  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        Choose topic
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}

        {isOpen &&
          <div >
            {topics.map((topic, index) => (
              <li key={index}>
                <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
              </li>
            ))}

          </div>
        }
      </button>
    </div>
  );
}

export default TopicDropDown