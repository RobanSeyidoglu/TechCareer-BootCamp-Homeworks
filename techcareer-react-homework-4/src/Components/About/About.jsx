import React from 'react';
import ContactCard from "../../Components/ContactCard/ContactCard.jsx";

function About() {
    return (
        <>
            <div className="w3-container w3-padding-32" id="about">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex ea commodo consequat. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim
                    ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            <div className="w3-row-padding w3-grayscale">

                <div className="w3-row-padding w3-grayscale">
                    <ContactCard
                        name="John Doe"
                        title="CEO & Founder"
                        imageSrc="https://www.w3schools.com/w3images/team2.jpg"
                        description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
                    />
                    <ContactCard
                        name="Jane Doe"
                        title="Architect"
                        imageSrc="https://www.w3schools.com/w3images/team1.jpg"
                        description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
                    />
                    <ContactCard
                        name="Mike Ross"
                        title="Architect"
                        imageSrc="https://www.w3schools.com/w3images/team3.jpg"
                        description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
                    />
                    <ContactCard
                        name="Dan Star"
                        title="Architect"
                        imageSrc="https://www.w3schools.com/w3images/team4.jpg"
                        description="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
                    />
                </div>
            </div>
        </>
    );
}

export default About;