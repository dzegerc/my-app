import React,  { useState, useEffect } from 'react';
import eventsMock from '../../lib/mock/events';


import EventInfo from '../../components/EventInfo/EventInfo';
import Section from '../../components/Section/Section';

import {
  Title,
  Image,
  Content,
  Description
} from '../../components/EventInfo/EventInfoStyle';


const Event = (props) => {
  const routeEventId = parseInt(props.match.params.id);
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    setEvents(eventsMock);
  }, []);

  useEffect(() => {
    events && setEvent(...events.filter(event => event.id === routeEventId));
  }, [events, routeEventId]);

  return(
    <>
        {event && 
        <>
          <Section>
            <Title>{event.title}</Title>
                <Image src={event.imageURL} alt={event.imageAlt}/>
            <Content>
                <EventInfo
                    location={event.location}
                    date={event.dateTime}
                    emptySpaces={event.availability}
                    company={event.company}
                    buttonText= "Prijavi se"
                    route= {`/event/${event.id}`}
                />
                 <Description>{event.description}</Description>
                </Content>
            </Section>
            </>
            }
        </>
    )
};
export default Event;