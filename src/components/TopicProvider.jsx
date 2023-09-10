import { createContext, useState } from "react";
export const TopicContext = createContext();

export const TopicProvider = ({ children }) => {
  const [currentTopic, setTopic] = useState("");
  

  return (
    <TopicContext.Provider value={{ currentTopic, setTopic }}>
      {children}
    </TopicContext.Provider>
  );
};
