import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getOneUser } from "../services/users";

const MyEvents = (props) => {
  const [user, setUser] = useState({});
  const { currentUser, handleDelete } = props;

  useEffect(() => {
    const getUser = async () => {
      if (currentUser) {
        const userData = await getOneUser(currentUser.id);
        setUser(userData);
      }
    };
    getUser();
  }, [currentUser]);

  return (
    <>
      {user.events && (
        <div>
          {user.events.map((event) => {
            return (
              <>
                <div>
                  <Link to={`/event/${event.id}`}>
                    <h3> {event.title}</h3>
                    <p> {event.description}</p>
                  </Link>
                  <Link to={`/eventedit/${event.id}`}>
                  <Button>Edit</Button>
                  </Link>
                  <Button onClick={() => handleDelete(event.id)}>Delete</Button>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MyEvents;
