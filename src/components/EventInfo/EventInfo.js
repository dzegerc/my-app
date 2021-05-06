
import React from 'react';
import { Button } from '../../lib/style/generalStyles';
import {
    EventInfo as EventInfoStyle,
    Title,
    Figure,
    Image,
    Content,
    ContentRow,
    Item,
    ItemTitle,
    ItemValue,
    Description
} from './EventInfoStyle';


const EventInfo = ({
    image,
    title,
    location,
    date,
    emptySpaces,
    company,
    description,
    imageAlt,
    buttonText,
    route
    
}) => {
    return (
        <>
        <EventInfoStyle>
            <Title>{title}</Title>
            <Figure>
                <Image src={image} alt={imageAlt}/>
            </Figure>
            <Content>
                <ContentRow>
                    <Item>
                        <ItemTitle>Lokacija</ItemTitle>
                        <ItemValue>{location}</ItemValue>
                    </Item>
                    <Item>
                    <ItemTitle>Datum i vrijeme</ItemTitle>
                        <ItemValue>{date}</ItemValue>
                    </Item>
                </ContentRow>
                <ContentRow>
                    <Item>
                        <ItemTitle>Slobodna mjesta</ItemTitle>
                        <ItemValue>{emptySpaces}</ItemValue>
                    </Item>
                    <Item>
                        <ItemTitle>Firma</ItemTitle>
                        <ItemValue>{company}</ItemValue>
                    </Item>
                </ContentRow>
                <Button to={route} text={buttonText}/> 
                <Description>{description}</Description>
            </Content>
        </EventInfoStyle>
        </>
    );
}
export default EventInfo;





