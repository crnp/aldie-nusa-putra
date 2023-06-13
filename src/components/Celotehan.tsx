import { CSSProperties } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import Tweets from './Tweets';
import aldie1 from '@/public/images/celotehan-a.png';
import aldie2 from '@/public/images/celotehan-b.png';
import aldie3 from '@/public/images/celotehan-c.png';
import aldie4 from '@/public/images/celotehan-d.png';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';

const quotes = [
  {
    img: aldie1,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
  },
  {
    img: aldie2,
    text: 'Soluta, corporis necessitatibus? Debitis aliquam unde dicta fugit tempora?',
  },
  {
    img: aldie3,
    text: 'Veniam, exercitationem? Enim dolores aliquid dolore eum nesciunt. ',
  },
  {
    img: aldie4,
    text: 'Quod odit consectetur deserunt nam officiis culpa inventore cum perspiciatis dignissimos vero, recusandae velit!',
  },
];

export default function Celotehan() {
  const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 40,
    height: 40,
    cursor: 'pointer',
  };
  return (
    <div className="relative">
      <FaTwitter className="absolute bottom-0 right-12 text-4xl z-50" />
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <FaChevronCircleLeft
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 10 }}
            />
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <FaChevronCircleRight
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 10 }}
            />
          )
        }
      >
        {quotes.map((item, i) => (
          <div className="py-6 px-14 h-full" key={i}>
            <div className="flex h-full justify-center items-center flex-col gap-4 md:gap-0 md:flex-row">
              <Image
                alt="dummy"
                src={item.img}
                width={400}
                height={100}
                className="basis-1/2"
              />
              <div className="relative basis-1/4 md:-translate-x-14">
                <p className="text-start font-display italic text-md md:text-xl lg:text-3xl ">
                  {item.text}
                </p>
                <div className="absolute -top-6 -right-6 font-sans text-6xl font-bold italic">
                  &quot;
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* {props.tweets.map((tweet, i) => (
          <div key={1} className="relative">
            <div className="flex min-h-[400px] justify-center items-center">
              <Image
                src={aldie}
                alt="aldie"
                width={1600}
                height={1600}
                className="basis-1/2 md:basis-1/3"
              />
              <p className="text-start font-display italic text-md basis-1/2 md:text-xl lg:text-3xl lg:-translate-x-14">
                {tweet.text}
              </p>
            </div>
          </div>
        ))} */}
      </Carousel>
    </div>
  );
}
