import './Events.scss';

import Section from '../../components/Section/Section';
import Grid from '../../components/Grid/Grid';
import EventsInfo from '../../components/EventsInfo/EventsInfo';

function App() {
    return (
        <>
        <Section title="Events">
                <Grid columns="3">
                <EventsInfo 
                           title="UX/UI design workshop"
                           location="Hodnik FOI-a"
                           date="14.10. (9:00-16:00h)"
                           emptySpaces="15/60"
                           company="Speck"
                           buttonText="Find out more"
                        />
                        <EventsInfo 
                            title="UX/UI design workshop"
                            location="Hodnik FOI-a"
                            date="14.10. (9:00-16:00h)"
                            emptySpaces="15/60"
                            company="Speck"
                            buttonText="Find out more"
                        />
                        <EventsInfo
                            title="UX/UI design workshop"
                            location="Hodnik FOI-a"
                            date="14.10. (9:00-16:00h)"
                            emptySpaces="15/60"
                            company="Speck"
                            buttonText="Find out more"
                        />
                        <EventsInfo 
                            title="UX/UI design workshop"
                            location="Hodnik FOI-a"
                            date="14.10. (9:00-16:00h)"
                            emptySpaces="15/60"
                            company="Speck"
                            buttonText="Find out more"
                        />
                        <EventsInfo
                            title="UX/UI design workshop"
                            location="Hodnik FOI-a"
                            date="14.10. (9:00-16:00h)"
                            emptySpaces="15/60"
                            company="Speck"
                            buttonText="Find out more"
                        />
                        <EventsInfo
                            title="UX/UI design workshop"
                            location="Hodnik FOI-a"
                            date="14.10. (9:00-16:00h)"
                            emptySpaces="15/60"
                            company="Speck"
                            buttonText="Find out more"
                        />
                </Grid>
            </Section>
    </>
    );
}
export default App;