import React from 'react';
import { Section as SectionStyle, 
        Title} from './SectionStyle';

const Section = ({
    children,
    title,
    withoutTopPadding
}) => {
    return (
        <SectionStyle withoutTopPadding={withoutTopPadding}>
            {title && <Title>{ title }</Title>}
            { children }
        </SectionStyle>
    );
}
export default Section;