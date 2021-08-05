import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
      <div className="about">
      <Navigation />
      <Logo />
      <h1>A propos</h1>
      <br />
      <p>
        React (also known as React.js or ReactJS) is a free and open-source
        front-end JavaScript library[3] for building user interfaces or UI
        components. It is maintained by Facebook and a community of individual
        developers and companies.[4][5][6] React can be used as a base in the
        development of single-page or mobile applications. However, React is
        only concerned with state management and rendering that state to the
        DOM, so creating React applications usually requires the use of
        additional libraries for routing, as well as certain client-side
        functionality.[7]
      </p>
      <br />
      <p>
        React (also known as React.js or ReactJS) is a free and open-source
        front-end JavaScript library[3] for building user interfaces or UI
        components. It is maintained by Facebook and a community of individual
        developers and companies.[4][5][6] React can be used as a base in the
        development of single-page or mobile applications. However, React is
        only concerned with state management and rendering that state to the
        DOM, so creating React applications usually requires the use of
        additional libraries for routing, as well as certain client-side
        functionality.[7]
      </p>
    </div>
  );
};

export default About;
