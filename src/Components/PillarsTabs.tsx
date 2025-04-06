// src/components/PillarsTabs.tsx
import React, { useState } from 'react';

interface Pillar {
  title: string;
  quote: string;
  attribution: { name: string; url: string; };
  description: string;
}

const pillars: Pillar[] = [
  {
    title: "Design",
    quote: "The cost of adding a feature isn't just the time it takes to code it. The cost also includes the addition of an obstacle to future expansion.",
    attribution: {
      name: "John Carmack",
      url: "https://en.wikipedia.org/wiki/John_Carmack"
    },
    description:
      "When solving any kind of problem, design is the first thing that comes into my mind. It is one of the pillars of great software that allows quality and legibility. Scalability is only an issue when there are flaws within the design. Without a pre-conceptual design, you will be writing more symptomatic code and fixing it than implementing new ideas. These are the thoughts I carry with me whenever I am writing code. I will always aim to write with intention by utilizing this pillar of design."
  },
  {
    title: "Quality",
    quote: "Clean code is not written by following a set of rules. You don’t become a software craftsman by learning a list of heuristics. Professionalism and craftsmanship come from values that drive disciplines.",
    attribution: {
      name: "Robert C. Martin",
      url: "https://en.wikipedia.org/wiki/Robert_C._Martin"
    },
    description:
      "To me, quality code has three levels of measurement: the level at which the code performs its function, the level at which the code itself can be understood, and the level at which it can be expanded upon. In other words, efficiency, legibility, and scalability. I will struggle every day trying to balance these out as quality is another pillar of what I aim to provide."
  },
  {
    title: "Efficiency",
    quote: "Simplicity and elegance are unpopular because they require hard work and discipline to achieve and education to be appreciated.",
    attribution: {
      name: "Dr. Edsger W. Dijkstra",
      url: "https://en.wikipedia.org/wiki/Edsger_W._Dijkstra"
    },
    description:
      "Efficiency is one of the pillars that require the most effort. This comes as a result of experience, staying informed on the latest algorithmic developments, but mostly I say it comes from our learned failures. Getting deep into the hardware and pulling out the architect's intention and manipulating it to your own design has always come with a challenge of speed and reliability. I will always strive most to provide efficiency wherever I am able."
  },
  {
    title: "Legibility",
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    attribution: {
      name: "Martin Fowler",
      url: "https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)"
    },
    description:
      "This one is an easy one. Whether it's the name of a variable or the namespace, it should be named in a way that can be followed and understood when the writer is not present. Of course this is easier said than done, but with a little effort and a little care, it's amazing what documentation can do on top of legible code. Another important pillar in what I believe makes good code. I aim to write with legibility in mind no matter what the task."
  },
];

const PillarsTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activePillar = pillars[activeIndex];
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="pb-5 text-4xl font-bold text-primary">My Pillars of Great Code</h2>
      {/* Tab Menu */}
      <div className="border-b border-gray-700 mb-4">
        <ul className="flex space-x-4">
          {pillars.map((pillar, index) => (
            <li key={index}>
              <button
                onClick={() => setActiveIndex(index)}
                className={`pb-2 transition-colors duration-300 ${
                  activeIndex === index
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-secondary hover:text-HoverColor'
                }`}
              >
                {pillar.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Tab Content */}
      <div className="text-primary">
        <div className="mb-4">
          <blockquote className="italic border-l-4 pl-4 border-secondary">
            {activePillar.quote}
          </blockquote>
          <div className="text-right mt-2">
            <a
              href={activePillar.attribution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-TextSecondaryColor hover:text-HoverColor"
            >
              -- {activePillar.attribution.name}
            </a>
          </div>
        </div>
        <p className="pt-4 text-lg whitespace-pre-line">
          {activePillar.description}
        </p>
      </div>
    </div>
  );
};

export default PillarsTabs;
