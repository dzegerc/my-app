
import React from 'react';
import { Button } from '../../lib/style/generalStyles';
import {
     EventInfoStyle,
    Title,
    Image,
    Content,
    ContentRow,
    Item,
    ItemTitle,
    ItemValue,
    Description
} from './EventInfoStyle';


const EventInfo = ({
    imageURL,
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
                <Image src={imageURL} alt={imageAlt}/>
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
                <Button to={route}>{buttonText}</Button>
                <Description>{description}</Description>
            </Content>
        </EventInfoStyle>
        </>
    );
}
export default EventInfo;





