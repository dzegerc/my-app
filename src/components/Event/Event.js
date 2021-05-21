import React from 'react';
import { Button} from '../../lib/style/generalStyles';
import { 
    Event as EventStyle,
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
        <EventStyle>
            <Figure>
               <Image src={image} alt={imageAlt}/> 
            </Figure>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button to={route}>{buttonText}</Button> 
        </EventStyle>
    );
}
export default Event;