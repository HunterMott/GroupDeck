import { Link } from "react-router-dom";
import React from "react";

const Home = (props) => {
  const { events } = props;
  
  return (
    <div>
      <h2>Welcome to GroupDeck</h2>
      <h3>This is what we do! </h3>
      <>
        {events.map((eventItem) => {
          return (
            <Link to={`/event/${eventItem.id}`}>
            <div className="eventCard">
                <p> {eventItem.title}</p>
                <p> {eventItem.date}</p>
              <p> {eventItem.description}</p>
              </div>
            </Link>
          );
        })}
      </>
    </div>
  );
};

export default Home;
