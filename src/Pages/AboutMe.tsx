import React from 'react';
import ImageCarousel from '../Components/ImageCarousel';
import PillarsTabs from '../Components/PillarsTabs';
import { Link } from 'react-router-dom';


      // Define an array of image URLs for your carousel.
    const carouselImages = [
        "/images/AboutMe1.jpg",
        "/images/AboutMe2.jpg",
        "/images/AboutMe3.jpg"
    ];

    interface AboutMeProps {
        onContactClick: () => void;
    }

    const AboutMe: React.FC<AboutMeProps> = ({ onContactClick }) => {

    return (
    <>
      {/* Brief History Section */}
      <section className="pt-24 pb-12 bg-[#030302]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="pb-5 text-4xl font-bold text-TextPrimaryColor">
            A Brief History
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Text Column */}
            <div>
              <p className="text-lg text-TextPrimaryColor">
                I grew up in NY and NJ, always had a passion for technology but didn't know I would find my path until a certain{' '}
                <a
                  href="https://www.kickstarter.com/projects/1523379957/oculus-rift-step-into-the-game"
                  className="text-TextSecondaryColor hover:text-HoverColor"
                >
                  KickStarter from 2012 by Palmer Luckey that promised modern Virtual Reality
                </a>.
                Ever since, I have dedicated my focus to learning real-time development and what it takes to create a full XR experience at the utmost quality. I completed my bachelor's degree at Florida International University on December of 2020. I will always remember the experiences I had there—from the student organization I founded to teach students how to develop XR apps, to the XR hackathons with close friends, and the professors who helped me pursue my passion deeper. Since then, I have worked on various projects for fun, as an activity, in contract work, and now professionally—even though the fun never left.
                Want to know more?{' '}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onContactClick();
                  }}
                  className="text-secondary hover:text-HoverColor ml-2"
                >
                  Just Ask!
                </a>
              </p>
            </div>
            {/* Carousel Column */}
            <div>
                <ImageCarousel images={carouselImages} />
            </div>
          </div>
        </div>
      </section>

      {/* My Pillars of Great Code Section */}
      <section className="bg-[#030302]">
        <PillarsTabs />
      </section>

      {/* What I'm Looking for Section */}
      <section className="py-12 bg-[#030302]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Decorative line and title */}
          <div className="text-left">
            <div className="w-16 h-1 bg-primary mb-4"></div>
              <h2 className="pb-5 text-4xl font-bold font-jost text-primary">
                What I'm Looking for....
              </h2>
          </div>

          {/* Section text */}
          <p className="pb-3 text-lg text-TextPrimaryColor">
            My ultimate goal is to be known for creating XR experiences/applications/games with my pillars of great code in mind.
            I am looking for a company that will help me grow as an engineer, expand as an artist, and thrive as a creator.
            Check out{' '}
            <Link to="/Portfolio" className="text-TextSecondaryColor hover:text-HoverColor">
              my portfolio
            </Link>
            , and if it looks like an ideal fit in your company please{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onContactClick();
              }}
              className="text-TextSecondaryColor hover:text-HoverColor"
            >
              CONTACT ME
            </a>
            .
          </p>
        </div>
      </section>

    </>
  );
};

export default AboutMe;
