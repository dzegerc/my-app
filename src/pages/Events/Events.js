import React,  { useState, useEffect } from 'react';
import eventsMock from '../../lib/mock/events';
import Loader from '../../components/Loader/Loader';

import { Section } from './EventsStyle'; 
import  { Grid } from '../../lib/style/generalStyles';
import EventsInfo from '../../components/EventsInfo/EventsInfo';

const Events = () => {
    const [events, setEvents] = useState(null);
    
  
    useEffect(() => {
        setTimeout(() => {
            setEvents(eventsMock);
        }, 1000);
    }, [events]);
  

    return (
        <>
              <Section title="Events">
                  <Loader />
                  {events &&
                    <Grid columns={4}>
                        {events.map(event => {
                            return (
                   <EventsInfo 
                           key={event.id}
                           title={event.title}
                           location={event.location}
                           date={event.dateTime}
                           emptySpaces={event.availability}
                           company={event.company}
                           buttonText="Find out more"
                           route={`/event/${event.id}`}
                        />
                     );
                  }
                        )
                } 
                </Grid>
                }
            </Section>
    </>
    );
}
export default Events;