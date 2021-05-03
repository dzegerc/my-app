import React from 'react';
import  {
    SectionHero,
    HeroOverlay,
    HeroContent,
    HeroHeading,
    HeroSubheading
} from './HeroStyle';


const Hero = () => {
    return (
        <SectionHero>
            <HeroOverlay>
                <HeroContent>
                    <HeroHeading>Centar za podršku studentima i razvoj karijera</HeroHeading>
                    <HeroSubheading>CPSRK aktivno radi na poboljšanju kvalitete cjelokupnog iskustva studiranja za studente i studentice FOI-ja na način da ih podržava, motivira i karijerno usmjerava. Svojim aktivnostima pomaže im kako bi se uspješno nosili s akademskim izazovima, napredovali kroz studij i počeli graditi svoju karijeru već tijekom studentskih dana.
                    </HeroSubheading>
                </HeroContent>
            </HeroOverlay>
        </SectionHero>
    );
}

export default Hero;