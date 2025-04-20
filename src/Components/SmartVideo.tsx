import React, { useEffect, useRef, useState } from 'react';

interface SmartVideoProps {
  video: string;
  alt?: string;
}

const SmartVideo: React.FC<SmartVideoProps> = ({ video, alt }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [posterUrl, setPosterUrl] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  // Intersection Observer (mobile only)
  useEffect(() => {
    if (!wrapperRef.current || !isTouchDevice) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );

    observer.observe(wrapperRef.current);
    return () => {
      if (wrapperRef.current) observer.unobserve(wrapperRef.current);
    };
  }, [isTouchDevice]);

  // Play/pause logic
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const shouldPlay = isTouchDevice ? isVisible : isHovered;

    if (shouldPlay) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
      vid.currentTime = 0;
    }
  }, [isVisible, isHovered, isTouchDevice]);

  // Generate poster and calculate aspect ratio
  useEffect(() => {
    const captureFrame = async () => {
      if (!videoRef.current || !canvasRef.current) return;

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      try {
        await video.play();
        video.pause();

        const width = video.videoWidth;
        const height = video.videoHeight;

        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(video, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg');
        setPosterUrl(dataUrl);
        setAspectRatio(width / height);
      } catch (err) {
        console.error('Could not generate poster or aspect ratio', err);
      }
    };

    if (!posterUrl && videoRef.current?.readyState! >= 2) {
      captureFrame();
    } else {
      videoRef.current?.addEventListener('loadeddata', captureFrame, { once: true });
    }
  }, [video]);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full overflow-hidden rounded-lg shadow-lg transition duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        aspectRatio: aspectRatio ? `${aspectRatio}` : '16 / 9',
      }}
    >
      {posterUrl && (
        <img
          src={posterUrl}
          alt={alt || ''}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      )}
      <video
        ref={videoRef}
        src={video}
        muted
        playsInline
        loop
        preload="auto"
        className="w-full h-full object-cover relative z-10"
        style={{ opacity: isTouchDevice ? (isVisible ? 1 : 0) : isHovered ? 1 : 0 }}
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default SmartVideo;
