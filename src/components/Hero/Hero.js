import React from 'react';
import  './Hero.scss';

const Hero = () => {
    return (
        <section className="SectionHero">
            <div className="SectionHero-HeroOverlay">
                <div className="SectionHero-HeroContent">
                    <h1 className="SectionHero-HeroHeading">Centar za podršku studentima i razvoj karijera
                    </h1>
                    <p className="SectionHero-HeroSubheading">CPSRK aktivno radi na poboljšanju kvalitete cjelokupnog iskustva studiranja za studente i studentice FOI-ja na način da ih podržava, motivira i karijerno usmjerava. Svojim aktivnostima pomaže im kako bi se uspješno nosili s akademskim izazovima, napredovali kroz studij i počeli graditi svoju karijeru već tijekom studentskih dana.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;