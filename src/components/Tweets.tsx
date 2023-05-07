import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';

import dummy from '@/public/images/dummy1.jpg';

type Tweet = {
  created_at: string;
  id_str: string;
  text: string;
};

type Props = {
  tweets: Tweet[];
};

export default function Tweets(props: Props) {
  return (
    <div className="relative py-6">
      <FaTwitter className="absolute bottom-0 right-12 text-4xl" />
      <div className="flex flex-col md:flex-row h-full justify-center items-center px-8">
        {/* <Image
          alt="dummy"
          src={dummy}
          width={800}
          height={100}
          className="basis-1/2"
        />
        <p className="text-start font-display italic text-md md:text-xl lg:text-3xl md:basis-1/4 md:-translate-x-14">
          Lorem ipsum dolor sit ametasdasdasdasds.
        </p> */}
      </div>
    </div>
  );
}
