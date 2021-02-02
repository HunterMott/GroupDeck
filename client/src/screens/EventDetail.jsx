import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneEvent } from "../services/events";

const EventDetail = (props) => {
  const [singleEvent, setSingleEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      const eventData = await getOneEvent(id);
      setSingleEvent(eventData);
    };
    fetchEvent();
  }, [id]);
  const event = singleEvent;
  return (
    <div>
      <>
        <img src={event?.img_url} alt='alt img' />
      </>
      <p> This event is being hosted by: {event?.user.username}</p>
      <h1>{event?.title}</h1>
      <h4>{event?.date}</h4>
      <p>{event?.description}</p>
      
    </div>
  );
};

export default EventDetail;
