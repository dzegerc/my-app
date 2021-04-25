
import './Event.scss';

import EventInfo from '../../components/EventInfo/EventInfo';
import ImageDesign from '../../assets/images/design.jpg'


function App() {
    return (
      <>
        <EventInfo 
                        image={ImageDesign}
                        location="Hodnik FOI-a"
                        date="14.10. (9:00-16:00h)"
                        emptySpaces="15/60"
                        company="Speck"
                        buttonText="Prijavi se"
                    />  
      </>
    );
  }
  
  export default App;