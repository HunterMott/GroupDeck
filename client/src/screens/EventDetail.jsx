import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneEvent } from '../services/events';

const EventDetail = (props) => {
  const [singleEvent, setSingleEvent] = useState(null)
  const { id } = useParams()
  
  useEffect(() => {
    const fetchEvent = async () => {
      const eventData = await getOneEvent(id)
      setSingleEvent(eventData)
    }
    fetchEvent()
  }, [id])

  return (
    <div>
      
    </div>
  );
};

export default EventDetail;