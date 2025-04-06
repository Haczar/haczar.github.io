// src/pages/MyPortfolio.tsx
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface PortfolioProps {
    onContactClick: () => void;
}

interface PortfolioItem {
  id: number;
  title: string;
  videoUrl: string;
  summaryTitle: string;
  description: string;
  isHidden?: boolean; // Optional property to hide the item
}

const portfolioItems: PortfolioItem[] = [
    {
        id: 12,
        title: "Nuclear Regulatory Commission VR Training Modules",
        videoUrl: "https://www.youtube.com/embed/NpEaa2P7qZI",
        summaryTitle: "A Summary of NRC VR Training Modules",
        description:
        "To be filled..." ,
        isHidden: true,  
    },
    {
        id: 11,
        title: "GE's Electrical Safety VR Training",
        videoUrl: "https://www.youtube.com/embed/NpEaa2P7qZI",
        summaryTitle: "A Summary of Electrical Safety VR",
        description:
        "To be filled..." ,
        isHidden: true,
    },
    {
        id: 10,
        title: "GTI Energy's VR Training Modules",
        videoUrl: "https://www.youtube.com/embed/NpEaa2P7qZI",
        summaryTitle: "A Summary of GTI VR Training",
        description:
        "During my time working on the Gas Utility VR Training app, I took on a range of technical responsibilities that significantly enhanced both our development process and the overall experience. I implemented improved source control practices and set up automated builds to streamline our workflow and ensure reliable integrations. Additionally, I developed a peer-to-peer lobby for multiplayer functionality, which enabled real-time, interactive training sessions. I also contributed to designing and coding core gameplay mechanics that brought the simulation to life.\n \n On a collaborative note, although the company had a dedicated art team, I worked closely with them to integrate custom menu graphics and design elements into the experience. This partnership helped ensure that the visual aspects of the application complemented the technical enhancements, resulting in a cohesive and engaging training tool." ,
        isHidden: true,
    },
    {
        id: 9,
        title: "Vail VR",
        videoUrl: "https://www.youtube.com/embed/Q17sCNNGUKk",
        summaryTitle: "A Summary of Vail VR",
        description:
          "VAIL VR is a virtual reality multiplayer competitive shooter. Emphasizing tactical gunplay, high-caliber combat, and collaborative teamwork. During my time at AEXLAB, I supported many different programmers which I loved because it really brought us close as a team. We would all want feedback on our code and you can say it was reviewed at least twice before being seen by the Lead Programmer or CTO. That environment may not have been as efficient as it could be but it really encompassed the word indie at heart. Everyone loved their job and you can feel the passion while you talk to anyone. Now lets get to the my specific contributions: \n \n As a Gameplay Programmer at AEXLAB, I was responsible for a variety of tasks that contributed to the development and improvement of the game. I started with little experience in network programming, but gained extensive knowledge while testing my gameplay features using Clumsy. In addition, I worked on bringing Unreal Blueprint classes to C++, implementing the functionality of the grenade system, adjusting Hand Poses for various objects, fixing gameplay bugs identified by playtesters, and creating platform compatible controller models for spectator reference. I also expanded the functionality of compatible headsets using the VRExpansionPlugin, communicated with 3rd party software companies to address bugs, and identified the source of EOS Subsystem/Plutosphere/Wwise crashes and bugs. To optimize the game, I worked on the codebase, VFX, audio, and texture. I also extended platform support to standalone devices using Jenkins and set up app upload and distribution on the Meta Quest Store.",
    },
    {
        id: 8,
        title: "Ammonia Unloading Training Simulation (VR)",
        videoUrl: "https://www.youtube.com/embed/NpEaa2P7qZI",
        summaryTitle: "A Summary of Ammonia Unloading Training Simulation",
        description:
          "The McDonough-Atkinson Ammonia Unloading Training Simulation is a VR training application created for the plant workers of Southern Company. The purpose of the application is to guide new employees through the ammonia unloading procedure from beginning to end in a virtual environment where there is room to make mistakes. \n \n As a Software Engineer contracted by Southern Company, I was responsible for a wide range of tasks related to the development of a VR training prototype. Specifically, I created the VR mechanics for equipment preparation and object focusing, designed and implemented a virtual pad for users to complete task checklists, and all interactable actors necessary for users to complete the training procedures. I also extended UI menus, and introduced MoCap animations on NPC characters. I optimized the code and environments to ensure smooth gameplay and user experience. Additionally, I created level transitions to provide a seamless user experience, and fixed all bugs identified in the tutorial, preparing, and unloading procedures. I also created custom audio effects as needed and added a custom plugin for dynamic spline hoses to improve the prototype's realism. To ensure ease of use, I introduced ladder climbing mechanics that are comfortable for users new to gaming or VR and many help cues that would lead the user to perform the intended task. I also incorporated ease of use features based on user feedback to improve the training prototype. Finally, I created a main menu to provide users with easy access to the different training procedures.",
    },
    {
        id: 7,
        title: "Animal Behavior Assessment (PC/VR)",
        videoUrl: "https://www.youtube.com/embed/NpEaa2P7qZI",
        summaryTitle: "A Summary of Animal Behavior Assessment",
        description:
          "Learning how to handle animals before students are prepared can be dangerous for both the animal and the handler. The Unity College XR Innovation Lab has developed a simulation where students can interact safely with an animal and study how they react to their handling tactics In this assignment students will learn how to recognize animal body language and behavior, assess how human behavior impacts animal behavior, how to respond appropriately to animal body language and behavior, conduct an animal behavior assessment and identify low-stress handling techniques for human-animal interaction. \n \n As a Software Engineer contracted by Unity College, I was in charge of preparing a prototype of this application as close to production as possible given a short time constraint. In a team of 2, I was able to complete the following tasks: \n Level Design, all UI (Main, Pause, Settings, and Control Menu), the interaction mechanics (UX) with the animal and the reactions the dog would have to those interactions. On top of that I was able to prototype a VR version building on the existing codebase.",
    },
    {
        id: 6,
        title: "Cattlepunk (Mobile)",
        videoUrl: "https://www.youtube.com/embed/MCscVtsgbm0",
        summaryTitle: "A Summary of Cattlepunk",
        description:
          "The year is 20xx. Milk has become one of the most efficient sources of energy in the galaxy. Enter the Robo Legion, Robotic overlords of zenmos prime, hellbent on stealing the Milk for themselves. The Robo Legion is set to take all of Earth's cattle, in turn, acquiring a limitless supply or milk. You are 'The Sheriff'. A watchful protector of these bovine creatures. Armed with your time limited psychic abilities and trusty six shooter, you must protect the cattle from the steely claws of these robotic menace. \n \n As a Gameplay Programmer contracted by Good War Games, this was a different experience because it was based on a mobile platform. This changes how you use Unreal Engine in more than a couple ways. First, I needed to ensure that the game runs well on devices with lower hardware specifications which means I need to reduce CPU/GPU memory usage and maintain good performance. This required me to bring this blueprint designed game to C++  in its entirely. Second, UI/UX must be intuitive and easy to navigate on smaller screens and touch-based interfaces because the input is completely different. Lastly the testing aspect of the development process is very different. Compatibility testing on different devices, performance testing, and battery life testing are all essential to have a production ready product. My main focus on this game was updating the codebase and optimizing.",
    },
    { 
        id: 5,
        title: "Fire360 Incident Command Simulator",
        videoUrl: "https://www.youtube.com/embed/NpEaa2P7qZI",
        summaryTitle: "A Summary of Fire360",
        description:
        "Fire360 is a VR Firefighter Command Simulation. The goal of the application is to help firefighters-in-training reinforce procedural behaviors for real-life situations. The simulation includes capabilities such as arrival, inspection, forcible entry, jumpline, primary search, secondary search, utilities, water supply, ventilation, and more.",
    },
    {
        id: 4,
        title: "FIU's First Year Experience: Community VR",
        videoUrl: "https://www.youtube.com/embed/jzpQ1wf-b7w",
        summaryTitle: "A Summary of FYE Community",
        description:
        "What is “Community”? This is the central question of this VR experience proposed by FIU CARTA. In fact, it’s many things, including an opportunity for student growth, faculty research, and an exploration of the future of higher education and looking at ways in which our species approaches the environment and interpersonal connections, and develops and assessed human agency and behaviors by reflecting on the 4C’s: Creativity, Collaboration, Critical Thinking, and Communication. FYE, First Year Experience Community VR is an application developed with Unreal Engine. The team was able to create a virtual environment representing the everglades. In this environment students have 15 minutes to create a structure using a limited number snapping blocks before the timer runs out. The goal is to practice the 4C’s and to analyze how it helped the process in creating their custom structure. \n \n For this project, I worked on many different aspects of the production pipeline. This project was a bit different than the others here since I was Project Lead and met with the product owners and planned with the development team in order to deliver meaningful goals every sprint. I worked with Maria Constantini to plan the logistics of user testing during the COVID-19 Pandemic in which we had to take every precaution to make sure it was a sterile experience throughout. I also helped develop this program with Edward Gonzalez on mechanics, UI, and networking.",
    },
    {
        id: 3,
        title: "Unity College's Virtual Forest",
        videoUrl: "https://www.youtube.com/embed/vP1N7RS3saM",
        summaryTitle: "A Summary on Virtual Forest",
        description:
        "This project was contracted to us by Unity College. We are noticing that there are more universities that are started to enhance their curriculum with virtual courses and sometimes virtual activities or assignments. Virtual Forest was made for students in the field of conservation. The application lets these students step into a day in the life of a conservation scientist where they would enter a virtual deciduous forest equipped with a laser rangefinder. The student will then locate and count a specific species and use that information to estimate that species population. Our goal in this project was to do everything possible to make it run on the lowest spec possible and levels in between. \n \n The project was already made but it was up to a team of two (Edward and I) to analyze the project and research the best tools to optimize all aspects and then deploy it in a way where mac and PC users of all kinds can all enjoy a consistently smooth experience. Using tools like MeshCombine, NatureRenderer, and our own custom scripts we were able to optimize to the point were we had a surface pro 4 running 120fps running on Vulkan. We debugged the entire simulation from analyzing frametimes and modifying the rendering pipeline accordingly to taking all scripts running on every frame and calling them when needed. It definitely one of the funs projects I've worked on.",
    },
    {
        id: 2,
        title: "Co-Location Prototype",
        videoUrl: "https://www.youtube.com/embed/NpEaa2P7qZI",
        summaryTitle: "A Summary on Co-Location Prototype",
        description:
        "A business investor funded this project. This one allowed me to test the limits of the Oculus Quest's native tracking hardware. Using VR Expansion Plugin and Antilatency hardware, the team developed a prototype application using Unreal Engine. We provided extensive reports on the margin of error within a mm and provided realtime solutions to mitigate drift in-game. Although we cannot discuss much further since it's a private IP, I can say that it was really interesting finding out how much we can push the quest's hardware. Although its just a Qualcomm Snapdragon 835 processor with 4GB of RAM, it is capable of awesomeness!!",
    },
    {
        id: 1,
        title: "Soulkeeper VR",
        videoUrl: "https://www.youtube.com/embed/_GyqOC8SXjA",
        summaryTitle: "A Summary on Soulkeeper VR",
        description:
        "This project was contracted to us by Helms Systems. Using Unreal Engine, Soulkeeper VR sets out to be an ambitious VR RPG. To this day, it will live as one of my favorite projects simply because everything we did was driven by a simple goal. That goal was for the user to have the best experience within each action. There's very few projects where developers can take their time and develop mechanics through the journey of trial and error. I was brought onboard after the first early access release and the team was looking to overhaul every aspect of the game. I had the honor of animating the player's hands and hand poses for the objects the player picked up (before we had automatic hand IK posing lol). I also worked on the AI of wildlife and farm animals. Additionally, I worked on optimizing the visual effects. I have always been a generalist when I work in these projects because I usually find myself in short handed teams. It is within these teams, that the original vision stays anchored and I had the pleasure of working with very talented people whom I learned from.",
    }
];

const Portfolio: React.FC<PortfolioProps> = ({ onContactClick }) => {
    const [activeItem, setActiveItem] = useState<number | null>(null);
  
    const toggleItem = (id: number) => {
      setActiveItem((prev) => (prev === id ? null : id));
    };
  
    return (
    <>
        <section className="pt-24 pb-5 bg-black min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
            <h2 className="pb-5 text-4xl font-bold text-[#FFD71D]">
                Portfolio
            </h2>
            <div className="space-y-3">
                {portfolioItems.filter((item) => !item.isHidden) .map((item) => {
                    const isOpen = activeItem === item.id; 
                    return (
                        <div
                        key={item.id}
                        className="bg-black text-[#FFD71D] border border-gray-600 rounded overflow-hidden"
                        >
                            {/* Accordion Header */}
                            <button
                                className="w-full flex items-center justify-between p-6 focus:outline-none"
                                onClick={() => toggleItem(item.id)}
                            >
                                <span className="text-lg font-bold">
                                {item.title}
                                </span>
                                {isOpen ? <FaMinus /> : <FaPlus />}
                            </button>
            
                            {/* Smooth Expandable Content */}
                            <div
                                className={`
                                overflow-hidden transition-all duration-300
                                ${isOpen ? 'max-h-[1000px] p-4' : 'max-h-0 p-0'}
                                `}
                            >
                                {/* Video Placeholder / Iframe */}
                                <div className="w-full aspect-video mb-4">
                                <iframe
                                    src={item.videoUrl}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                                </div>
                                {/* Summary Title */}
                                <h2 className="text-2xl font-bold mb-2 text-primary">
                                {item.summaryTitle}
                                </h2>
                                {/* Description */}
                                <p className="text-base text-primary whitespace-pre-line">
                                {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        </section>
      {/* "You seeing what I'm seeing...." Section */}
      <section className=" bg-black">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-left">
                {/* Decorative line */}
                <div className="w-16 h-1 bg-primary mb-4"></div>
                <h2 className="pb-5 text-4xl font-bold font-jost text-primary">
                You seeing what I'm seeing....
                </h2>
                <p className="pb-3 text-lg text-primary">
                    If you're looking at my portfolio, there's a chance you're doing some cool XR work I would love to be a part of.
                    To give you some perspective, I am looking for a company/team that will help me grow as an engineer, expand as an artist,
                    and thrive as a creator. Check out my work and don't hesitate to{' '}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onContactClick();
                        }}
                        className="text-secondary hover:text-HoverColor"
                    >
                        CONTACT ME 
                    </a>
                    {' '}
                    if I can support your team.
                </p>
            </div>
        </div>
      </section>
    </>
  );
};
  

export default Portfolio;
