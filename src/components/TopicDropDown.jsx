import React from 'react'
import { useState, useEffect } from 'react';
import { getTopics } from "../Api";
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { capitalisingFirstLetter } from '../functions'
import { TopicContext } from "./TopicProvider";
import { useContext } from 'react';




const TopicDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { currentTopic, setTopic } = useContext(TopicContext); 


  useEffect(() => {
      setIsLoading(true);
      setIsError(false);
      getTopics()
        .then((data) => {
        setIsLoading(false);
          setTopics(data);
        })
        .catch((err) => {
           setIsLoading(false);
           setIsError(true);
        });
  }, []);
  
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something has gone wrong!</p>;

  


  return (
    <div className="buttonContainer">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="topicbutton"
      >
        {currentTopic === ""
          ? "Select Topic"
          : capitalisingFirstLetter(currentTopic)}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
        {isOpen && (
          <div>
            {topics.map((topic, index) => (
              <li key={index} className="topiclist">
                <Link
                  to={`/topics/${topic.slug}`}
                  onClick={() => setTopic(capitalisingFirstLetter(topic.slug))}
                >
                  {capitalisingFirstLetter(topic.slug)}
                </Link>
              </li>
            ))}
          </div>
        )}
      </button>
    </div>
  );
}

export default TopicDropDown