import React, { useEffect, useRef, useState } from 'react';

interface HoverVideoProps {
  still: string;
  video: string;
  alt?: string;
}

const HoverVideo: React.FC<HoverVideoProps> = ({ still, video, alt }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    if (!isTouchDevice || !wrapperRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );

    observer.observe(wrapperRef.current);

    return () => {
      if (wrapperRef.current) observer.unobserve(wrapperRef.current);
    };
  }, [isTouchDevice]);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (isVisible && isTouchDevice) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
      vid.currentTime = 0;
    }
  }, [isVisible, isTouchDevice]);

  const handleMouseEnter = () => {
    if (!isTouchDevice && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg transition duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={video}
        poster={still}
        muted
        playsInline
        loop
        preload="none"
        className="w-full h-auto object-cover"
      />

      <span className="sr-only">{alt}</span>
    </div>
  );
};

export default HoverVideo;
