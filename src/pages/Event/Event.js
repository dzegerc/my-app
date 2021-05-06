import React,  { useState, useEffect } from 'react';
import eventsMock from '../../lib/mock/events';


import EventInfo from '../../components/EventInfo/EventInfo';
import Section from '../../components/Section/Section';

import {
  Title,
  Figure,
  Image,
  Content,
  ContentRow,
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
            <Figure>
                <Image src={event.imageURL} alt={event.imageAlt}/>
            </Figure>
            <Content>
              <ContentRow>
                <EventInfo
                    location={event.location}
                    date={event.dateTime}
                    emptySpaces={event.availability}
                    company={event.company}
                    route= {`/event/${event.id}`}
                />
                 </ContentRow>
                 <Description>{event.description}</Description>
                </Content>
            </Section>
            </>
            }
        </>
    )
};
export default Event;