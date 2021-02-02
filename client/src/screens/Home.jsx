import { Link } from "react-router-dom";
import React from "react";
import '../styles/Home.css'

const Home = (props) => {
  const { events } = props;
  
  return (
    <div className='homepage'>
      <h2>Welcome to GroupDeck</h2>
      <h3>This is a place to find things to do! From sunday after</h3>
      <p>Check out these events!</p>
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
