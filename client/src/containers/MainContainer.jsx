import React from 'react';
import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from 'react-router';
import EventCreate from '../screens/EventCreate';
import EventDetail from '../screens/EventDetail';
import EventEdit from '../screens/EventEdit';
import Home from '../screens/Home';
import MyEvents from '../screens/MyEvents';
import { deleteEvent, getAllEvents, postEvent, putEvent, getOneEvent } from '../services/events'

const MainContainer = (props) => {
  const [events, setEvents] = useState([])
  const { currentUser } = props
  const history = useHistory()

  useEffect(() => {
    const fetchEvents = async () => {
      const eventData = await getAllEvents();
      setEvents(eventData)
    }

  }, []);

  return (
    <Switch>
      <Route path='/event/:id'>
        <EventDetail />
      </Route>
      <Route path='/eventcreate'>
        <EventCreate />
      </Route>
      <Route path='/myevents'>
        <MyEvents />
      </Route>
      <Route path='/eventedit'>
        <EventEdit />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
};

export default MainContainer;