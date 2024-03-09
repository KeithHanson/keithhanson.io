import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Keith Hanson:</h2>;
  const three = <h3 className="big-heading">A Contract Software Development Warlock</h3>;
  const four = (
    <>
      <p>
        Drawing from my adventures as the former CTO of the City of Shreveport and the founder & CEO at a thriving software consultancy before that, 
        I've racked up more than 20 years of tech wizardry and executive savvy. <br /><br />

        Now, I'm channeling all that know-how into helping CIOs, Chief Innovation Officers, and CTOs navigate the tricky waters of 
        tech, AI, and the web from my desk here in my hometown Shreveport, Louisiana. <br /><br />

        These days, you'll find me collaborating with the folks at {' '}
        <a href="https://abatix.com/" target="_blank" rel="noreferrer">
          Abatix
        </a>.  They're all about enterprise e-commerce and industrial gear, and I'm crafting a shiny new e-commerce store, weaving AI magic into every nook and cranny of their operations, and lending a hand to their CTO. 
      </p>
    </>
  );
  const five = (
    <div style={{marginTop: 10}}>
      <a
        className="email-link"
        href="mailto:keith@keithhanson.io?subject='Can you build it?'"
        target="_blank"
        rel="noreferrer" style={{marginTop: 0}}>
        Let's make magic together 
      </a>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
