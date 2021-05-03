import React from 'react';
import Button from '../../components/Button/Button';
import { 
    EventInfo,
    Figure,
    Image,
    Title,
    Description
} from './EventStyle';



  

const Event = ({
    image,
    title,
    imageAlt,
    description,
    buttonText,
    route
}) => {
    return (
        <EventInfo>
            <Figure>
               <Image src={image} alt={imageAlt}/> 
            </Figure>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button text={buttonText} route={route} />
        </EventInfo>
    );
}
export default Event;