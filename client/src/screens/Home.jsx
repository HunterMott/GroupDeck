import { Link } from "react-router-dom";
import React from "react";
import '../styles/Home.css'

const Home = (props) => {
  const { events } = props;
  
  return (
    <div className='homepage'>
      <h2>Welcome to GroupDeck</h2>
      <h3>Find events hosted by local groups where you can meet new people, try something new, or just do more of what you love.</h3>
      <p>Check out these events!</p>
      <>
        {events.map((eventItem) => {
          return (
            <Link to={`/event/${eventItem.id}`}>
            <div className="eventCard">
                <h3> {eventItem.title}</h3>
                <h5> {eventItem.date}</h5>
                <img className='homeimg' src={eventItem.img_url} alt='alt img' />
              <p> {eventItem.description.substring(0, 350)}...</p>
              </div>
            </Link>
          );
        })}
      </>
    </div>
  );
};

export default Home;
