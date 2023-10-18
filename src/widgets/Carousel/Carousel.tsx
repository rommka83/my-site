import React from 'react';
import {
  Carousel as CarouselTW,
  Typography,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@material-tailwind/react';
import { sites } from '../../assets/sites';
import { nanoid } from 'nanoid';

const renderSlides = () => {
  return sites.map((site) => {
    return (
      <Card
        className=' mt-6 w-full border-2 border-black/20 pb-6'
        key={nanoid()}
      >
        <CardHeader
          color='blue-gray'
          className='relative h-56'
        >
          <img
            src={site.img}
            alt={site.img}
            className='h-full w-full object-cover'
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant='h5'
            color='blue-gray'
            className='my-2 text-center'
          >
            {site.name}
          </Typography>
          <Typography
            variant='paragraph'
            className='h-20 overflow-y-scroll pt-5'
          >
            {site.description}
          </Typography>
        </CardBody>
        <CardFooter className='flex justify-around pt-0'>
          <Button className='bg-btn'>
            <a href={site.kod}>Посмотреть код</a>
          </Button>
          <Button className='bg-btn'>
            <a href={site.site}>Посетить сайт</a>
          </Button>
        </CardFooter>
      </Card>
    );
  });
};

export function Carousel() {
  return (
    <CarouselTW
      className='mb-10 rounded-xl border-b-white'
      loop={true}
      prevArrow={({ loop, handlePrev, firstIndex }) => {
        return (
          <button
            onClick={handlePrev}
            disabled={!loop && firstIndex}
            className='bg-btn !absolute left-4 top-2/4 grid h-12 max-h-[48px] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full transition-all'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </button>
        );
      }}
      nextArrow={({ loop, handleNext, lastIndex }) => (
        <button
          onClick={handleNext}
          disabled={!loop && lastIndex}
          className='bg-btn !absolute right-4 top-2/4 grid h-12 max-h-[48px] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full transition-all'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      )}
      navigation={({
        setActiveIndex,
        activeIndex,
        length,
      }) => {
        return (
          <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                  activeIndex === i
                    ? 'bg-orange-200'
                    : 'bg-gray-900'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        );
      }}
    >
      {renderSlides()}
    </CarouselTW>
  );
}
