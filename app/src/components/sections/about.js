import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['ollama', 'open-source LLMs', 'vector databases', 'crew-ai', 'chromadb', 'langchain', 'streamlit', 'dagster', 'python', 'gatsby', 'react', 'javascript (ES6+)', 'docker', 'SQL', 'Metabase (data dashboarding)', 'DataDog (monitoring, log collation)', 'Selenium (browser automation)', 'Arduino/ESP32' ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            I've been writing software since the early 1990's, back when some of us still used actually floppy
            floppy disks. My first program was in Turbo Pascal, in a DOS based IDE that bragged about their
            copy/paste features!
            </p>

            <p>
              Fast-forward to today, and I've had the luck and pleasure of wearing many different hats. <br /> <br/>
              Here are a few public accolades and press I've received most recently that showcase my combined talents:
              <ul>
                <li><a href="https://bloombergcities.medium.com/looking-for-low-cost-hacks-to-make-a-data-driven-city-f310e8e55aa2"><u>Bloomberg Cities Innovator of the Week</u></a></li>
                <li><a href="https://makezine.com/article/maker-news/hacking-garbage-trucks-to-bring-broadband-to-those-in-need/"><u>Hacking Garbage Trucks to Bring Broadband to Those in Need</u></a></li>
                <li><a href="https://710keel.com/top-10-successes-of-mayor-perkins-in-his-first-year/"><u>Locally rated #1 Hire of Mayor Perkins</u></a></li>
                <li><a href="https://www.daveyawards.com/winners/gallery/?year=8&type=12"><u>2012 Best in Show & Gold Winner: Mobile Applications</u></a></li>
              </ul>

              I ran a successful software development agency called Twin Engine Labs, where my team and I recruited 
              and trained dozens of amazing software developers, right here in Shreveport. Twin Engine Labs merged successfully
              with another local web development agency in 2019, who are still creating amazing web and mobile applications for 
              clients at <a href="https://www.rubyshore.com">RubyShore.com</a>. 
            </p>

            <p>

              Several of the articles mention my time in City Hall here in Shreveport. Shortly after my company's merger, I was
              asked to become Shreveport first Chief Technology Officer by then Mayor Adrian Perkins. <br /><br/>

              In the time I served with him, I re-org'd the IT department, created pathways for promotional raises when I saw that
              many of my staff had not had any increases in more than a decade, I recruited heavily and finally reached 100% roster
              after years of almost 50% shortages, created a Real Time Crime Center, and help bring free Broadband to citizens who couldn't afford it. <br /><br />

              While I am enormously proud of the team and our accomplishments, I longed for the full-time developer focused life once
              more. In January 2023, I struck back out on my own again and couldn't be happier with my decision.

            </p>

            <p>Here are a few technologies I’ve been working with recently and am open for contracts for:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
