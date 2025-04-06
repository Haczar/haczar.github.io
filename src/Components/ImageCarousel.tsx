// src/components/EmblaCarousel.tsx
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface EmblaCarouselProps {
  images: string[];
}

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ images }) => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, skipSnaps: true },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container">
        {images.map((img, index) => (
          <div className="embla__slide" key={index}>
            <img src={img} alt={`Slide ${index}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
