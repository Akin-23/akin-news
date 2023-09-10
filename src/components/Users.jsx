import React, { useContext, useState, useEffect } from "react";
import { getUsers } from "../Api";
import { UserContext } from "./UserProvider";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setUser, setUserImage } = useContext(UserContext);
  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);
  return (
    <div>
      <section className="user">
        {users.map((user) => {
          return (
            <div
              key={user.username}
              className="user_card"
              onClick={() => {
                setUser(user.username);
                setUserImage(user.avatar_url);
              }}
            >
              <p className="user_text">{user.username}</p>
              <img
                src={user.avatar_url}
                alt={user.username}
                className="user_avatar"
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Users;
