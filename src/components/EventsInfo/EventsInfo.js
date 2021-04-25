import React from 'react';
import './EventsInfo.scss';
import { Link } from 'react-router-dom';

const links = {
    event: 'Find out more',
}

const EventsInfo = ({
    title,
    location,
    date,
    emptySpaces,
    company,
    buttonText
}) => {
    return (
        <div className="EventsInfo">
                <h2 className="EventsInfo-Title">{title}</h2>
                <div className="EventsInfo-Content">
                    <div className="EventsInfo-ContentRow">
                        <div className="EventsInfo-Item">
                            <h3 className="EventsInfo-ItemTitle">Lokacija</h3>
                            <p className="EventsInfo-ItemValue">{location}</p>
                        </div>
                        <div className="EventsInfo-Item">
                            <h3 className="EventsInfo-ItemTitle">Datum i vrijeme</h3>
                            <p className="EventsInfo-ItemValue">{date}</p>
                        </div>
                    </div>
                    <div className="EventsInfo-ContentRow">
                        <div className="EventsInfo-Item">
                            <h3 className="EventsInfo-ItemTitle">Slobodna mjesta</h3>
                            <p className="EventsInfo-ItemValue">{emptySpaces}</p>
                        </div>
                        <div className="EventsInfo-Item">
                            <h3 className="EventsInfo-ItemTitle">Firma</h3>
                            <p className="EventsInfo-ItemValue">{company}</p>
                        </div>
                    </div>
                </div>
                <Link text={buttonText} className="Button" to="/event">{links.event} </Link>
            </div>
    );
}
export default EventsInfo;