import React from 'react';
import FeatureCard, { FeatureCardProps } from '../Components/FeatureCard';

const featuresData: FeatureCardProps[] = [
  {
    title: "About Me",
    description: "Resume/Accomplishments/Desires",
    image: "/images/ICave_1.jpeg",
    link: "/AboutMe",
  },
  {
    title: "My Portfolio",
    description: "Everything I've worked on.",
    image: "/images/MGM2020.jpeg",
    link: "/Portfolio",
  },
  {
    title: "Resources & Inspirations",
    description: "If you do similar work, you may be interested.",
    image: "/images/SoulkeeperTeam.jpg",
    link: "/Resources",
  },
];

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-[#030302]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Text Column */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1
            className="text-5xl font-bold font-oxygen bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(45deg, #FFD71D 0%, #649B10 70%)" }}
            >
                Haczar Criollo
            </h1>
            <div className="mt-4 space-y-2">
              <h2 className="text-3xl font-semibold font-oxygen text-TextSecondaryColor">
                <span className="line-through decoration-TextPrimaryColor">AR/VR/MR</span> XR DEVELOPER</h2>
              <h2 className="text-3xl font-semibold font-oxygen text-TextSecondaryColor">
                UE/Unity DEVELOPER
              </h2>
            </div>
          </div>
          {/* Image Column */}
          <div className="lg:w-1/2">
            <img src="/images/Profile1.png" alt="Hero" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-[#030302]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                link={feature.link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
