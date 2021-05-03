import React,  { useState, useEffect } from 'react';
import eventsMock from '../../lib/mock/events';


import EventInfo from '../../components/EventInfo/EventInfo';
import Section from '../../components/Section/Section';



const Event = (props) => {
  const routeEventId = parseInt(props.match.params.id);
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    setEvents(eventsMock);
  }, []);

  useEffect(() => {
    events && setEvent(...events.filter(event => event.id === routeEventId));
  }, [events]);

  return(
    <>
        {event && 
        <>
            <h1 className="Title">{event.title}</h1>
            <Section title={event.title}>
                <EventInfo
                    location={event.location}
                    date={event.dateTime}
                    emptySpaces={event.availability}
                    company={event.company}
                    description={event.description}
                    route= {`/event/${event.id}`}
                />
            </Section>
            </>
            }
        </>
    )
};
export default Event;
