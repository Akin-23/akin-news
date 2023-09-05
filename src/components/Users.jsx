import React, { useContext, useState, useEffect } from "react";
import { getUsers } from "../Api";
import { UserContext } from "./UserProvider";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);
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
              }}
            >
              <img
                src={user.avatar_url}
                alt={user.username}
                className="user_avatar"
              />
              <p className="user_text">{user.username}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Users;
