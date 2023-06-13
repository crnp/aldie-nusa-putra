import { cx } from '@/utils/cx';
import { CSSProperties, useState, MouseEvent } from 'react';
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaChevronLeft,
} from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';

import Youtube, { YouTubeProps } from 'react-youtube';

export default function Podcast() {
  const [podcastId, setPodcastId] = useState('C7OQHIpDlvA');
  const [watchingPodcast, setWatchingPodcast] = useState(false);
  const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    bottom: 20,
    width: 40,
    height: 40,
    cursor: 'pointer',
  };

  // function podcastWatch(event: MouseEvent, id: string): void {
  //   setPodcastId(id);
  //   setWatchingPodcast(true);
  // }

  const opts = {
    height: 600,
  };

  const podcasts = [
    {
      thumb: 'images/banner.png',
      id: 'C7OQHIpDlvA',
    },
    {
      thumb: 'https://i.ytimg.com/vi/r51cYVZWKdY/maxresdefault.jpg',
      id: 'r51cYVZWKdY',
    },
    {
      thumb: 'https://i.ytimg.com/vi/UaVTIH8mujA/maxresdefault.jpg',
      id: 'UaVTIH8mujA',
    },
  ];
  function carouselChangeHandler(index: number, item: React.ReactNode): void {
    setPodcastId(podcasts[index].id);
  }

  return (
    <>
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        onChange={carouselChangeHandler}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <FaChevronCircleLeft
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 80 }}
            />
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <FaChevronCircleRight
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 20 }}
            />
          )
        }
      >
        {podcasts.map((item, index) => (
          <div
            key={index}
            className={cx(watchingPodcast ? 'hidden' : 'flex', 'h-full')}
          >
            <img src={item.thumb} />
            <button
              className="hidden md:block absolute bottom-8 left-12 text-xl z-10 px-4 py-2 bg-white rounded-lg hover:scale-105"
              onClick={() => setWatchingPodcast(true)}
            >
              WATCH
            </button>
          </div>
        ))}
      </Carousel>
      <button
        className="block md:hidden px-4 py-2 bg-gray-200 rounded-lg"
        onClick={() => setWatchingPodcast(true)}
      >
        WATCH
      </button>
      {watchingPodcast && (
        <>
          <Youtube
            videoId={podcastId}
            className="w-full justify-center"
            iframeClassName="w-full"
            opts={opts}
          />
          <button
            className="bg-gray-200 px-4 py-2 mt-2"
            onClick={() => {
              setWatchingPodcast(false);
            }}
          >
            <div className="flex gap-2 items-center">
              <FaChevronLeft />
              Other Podcasts
            </div>
          </button>
        </>
      )}
    </>
  );
}
