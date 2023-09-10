import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState(null);

  const isLoggedIn = () => {
    return user !== null;
  };




  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, userImage, setUserImage }}>
      {children}
    </UserContext.Provider>
  );
};







