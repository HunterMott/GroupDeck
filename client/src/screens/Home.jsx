import { Card, CardContent, Paper } from "@material-ui/core";
import React from "react";

const Home = (props) => {
  const { events, currentUser } = props;
  console.log(events);
  return (
    <div>
      <h2>Welcome to GroupDeck</h2>
      <h3>This is what we do! </h3>
      <>
        {events.map((eventItem) => {
          return (
            <div className='eventCard'>
              <p> {eventItem.title}</p>
              <p> {eventItem.date}</p>
              <p> {eventItem.description}</p>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Home;
