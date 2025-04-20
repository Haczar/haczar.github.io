import SmartVideo from '../Components/SmartVideo';
import Masonry from 'react-masonry-css';
import { useMemo } from 'react';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const Resource: React.FC = () => {
  const videoFiles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        path: `videos/Inspiration${i + 1}.webm`,
        alt: `Inspiration ${i + 1}`,
      })),
    []
  );

  return (
    <section className="pt-24 pb-12 bg-[#030302]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-primary font-bold mb-8">Resources & Inspirations</h2>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {videoFiles.map((video, index) => (
            <SmartVideo key={index} video={video.path} alt={video.alt} />
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Resource;
