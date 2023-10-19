import { Carousel } from '../../widgets/Carousel';
import { Typography } from '@material-tailwind/react';

export function ProjectPage() {
  return (
    <>
      <Typography variant='h2' className='text-color my-5'>
        Некоторые примеры моих работ:
      </Typography>
      <Carousel />
    </>
  );
}
