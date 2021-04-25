import './EventInfo.scss';

import React from 'react';
import { Link } from 'react-router-dom';


const links = {
    event: 'Prijavi se',
}


const EventInfo = ({
    image,
    location,
    date,
    emptySpaces,
    company,
    buttonText
}) => {
    return (
        <div className="EventInfo">
            <h2 className="EventInfo-Title">UX/UI design workshop</h2>
            <div className="EventInfo-Info">
                <figure className="EventInfo-Figure">
                    <img src={image} alt="UX/UI workshop" className="EventInfo-Image"></img>
                </figure>
                <div className="EventInfo-Content">
                    <div className="EventInfo-ContentRow">
                        <div className="EventInfo-Item">
                            <h3 className="EventInfo-ItemTitle">Lokacija</h3>
                            <p className="EventInfo-ItemValue">{location}</p>
                        </div>
                        <div className="EventInfo-Item">
                            <h3 className="EventInfo-ItemTitle">Datum i vrijeme</h3>
                            <p className="EventInfo-ItemValue">{date}</p>
                        </div>
                    </div>
                    <div className="EventInfo-ContentRow">
                        <div className="EventInfo-Item">
                            <h3 className="EventInfo-ItemTitle">Slobodna mjesta</h3>
                            <p className="EventInfo-ItemValue">{emptySpaces}</p>
                        </div>
                        <div className="EventInfo-Item">
                            <h3 className="EventInfo-ItemTitle">Firma</h3>
                            <p className="EventInfo-ItemValue">{company}</p>
                        </div>
                    </div>
                    <div className="EventInfo-InfoContentRow">
                    <Link text={buttonText} className="Button" to="/event">{links.event}</Link>
                    </div>
                </div>
            </div>
            <div className="EventInfo-Description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dignissimos eligendi inventore odio quis soluta nisi, expedita iste fugit. Libero natus quasi asperiores ex odit cumque vel cum amet porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas assumenda quaerat accusantium quidem eligendi quibusdam nobis voluptatem? Qui non consequuntur ratione debitis deleniti quod fugiat! Esse doloribus necessitatibus voluptatum enim.
            </div>
        </div>
    );
}

export default EventInfo;