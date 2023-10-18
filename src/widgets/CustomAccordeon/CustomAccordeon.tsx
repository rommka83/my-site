import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from '@material-tailwind/react';
import { faq } from '../../assets/faq';
import { nanoid } from 'nanoid';

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
      />
    </svg>
  );
}

export function CustomAccordeon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (
    value: React.SetStateAction<number>,
  ) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Typography variant='h2' className='text-color my-10'>
        Меня часто спрашивают:
      </Typography>

      {faq.map((el, index) => {
        return (
          <Accordion
            open={open === index + 1}
            icon={<Icon id={index + 1} open={open} />}
            key={nanoid()}
          >
            <AccordionHeader
              className={`text-color hover:text-red-500 ${
                open === index + 1 && 'text-green-500'
              }`}
              onClick={() => handleOpen(index + 1)}
            >
              {el.question}
            </AccordionHeader>
            <AccordionBody className='text-color'>
              {el.answer}
            </AccordionBody>
          </Accordion>
        );
      })}
    </>
  );
}
