// #region FeatureCard Component (Updated with Hover Text Color Change)
import React from 'react';
import { Link } from 'react-router-dom';

export interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  isHidden?: boolean; // Optional prop to hide the card
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image, link }) => {
  return (
    <Link to={link} className="block group">
      <div
        className="bg-neutral-900 shadow transition-all duration-300 transform rounded-lg overflow-hidden border border-TextSecondaryColor
          group-hover:-translate-y-2 group-hover:border-TextPrimaryColor group-hover:bg-[linear-gradient(90deg,#BB9803_0%,#6B9F10_100%)]"
      >
        {/* Text Block Above Image */}
        <div className="p-4 text-center transition-colors duration-300">
          <h4
            className="text-2xl md:text-3xl font-bold font-jost text-TextPrimaryColor group-hover:text-TextSecondaryColor"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            {title}
          </h4>
          <p
            className="mt-2 text-base md:text-lg font-jost text-TextSecondaryColor group-hover:text-TextPrimaryColor"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
          >
            {description}
          </p>
        </div>
        {/* Image Block */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-[center_25%] transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </Link>
  );
};

export default FeatureCard;