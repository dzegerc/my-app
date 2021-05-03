import React, {useState, useEffect} from 'react';
import eventsMock from '../../lib/mock/events';
import Loader from '../../components/Loader/Loader';
import '../../App.scss';

import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import { Grid } from '../../lib/style/generalStyles';
import Event from '../../components/Event/Event';



const Home = () => {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setEvents(eventsMock);
        }, 1000);
    }, [events]);

    return (
        <>
            <Hero/>
            <Section title="Featured Events">
            <Loader />
                {events && 
                  <Grid columns={3}>
                      {events.map(event => event.isFeatured &&
                          <Event 
                            key={event.id}
                            image={event.imageUrl}
                            title={event.title}
                            description={event.shortDescription}
                            imageAlt={event.imageAlt}
                            buttonText="Find out more"
                            route={`/event/${event.id}`}
                        />  
                        )
                    }
                </Grid>
               }
            </Section>
      
        </>
      );
    }
export default Home;
