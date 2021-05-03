import React from 'react';
import Button from '../../components/Button/Button';
import {
    EventsInfo as EventsInfoStyle,
    Title,
    Content,
    ContentRow,
    Item,
    ItemTitle,
    ItemValue
} from './EventsInfoStyle';

const links = {
    event: 'Find out more',
}


const EventsInfo = ({
    title,
    location,
    date,
    emptySpaces,
    company,
    buttonText,
    route
}) => {
    return (
        <>
        <EventsInfoStyle>
            <Title>{title}</Title>
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
            </Content>
            <Button text={buttonText} route={route} />
            </EventsInfoStyle>
        </>
    );
}
export default EventsInfo;