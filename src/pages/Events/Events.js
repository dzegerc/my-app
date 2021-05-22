import React,  { useState, useEffect } from 'react';
import eventsMock from '../../lib/mock/events';
import Loader from '../../components/Loader/Loader';

import { Section } from './EventsStyle'; 
import  { Grid } from '../../lib/style/generalStyles';
import EventsInfo from '../../components/EventsInfo/EventsInfo';
import eventsStore from '../../components/store/EventStore';
import { ButtonAdd } from '../../lib/style/generalStyles';
import { observer } from 'mobx-react-lite';

const Events = () => {
    const [events, setEvents] = useState(null);
    const [filteredEvents, setFilteredEvents] = useState(null);
    
  
    useEffect(() => {
        let mounted = true;

        if (eventsStore.eventLenght === 0) {
            setTimeout(() => {
                if (mounted) {
                    eventsStore.setEvents(eventsMock);
                    setEvents(eventsStore.getEvents);
                    setFilteredEvents(eventsStore.getEvents);
                }
            }, 1000);
        } else {
            setEvents(eventsStore.getEvents);
            setFilteredEvents(eventsStore.getEvents);
        }
    });
  

    return (
        <>
              <Section title="Events">
                  <Loader />
                  {events &&
                  <GridHeader>
                      <ButtonAdd>Add events</ButtonAdd>
                  </GridHeader>
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

export default observer(Events);