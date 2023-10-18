import {
  Progress,
  Typography,
} from '@material-tailwind/react';
import React from 'react';
import { technologies } from '../../assets/technologies';
import { level } from './Technologies.service';
import { nanoid } from 'nanoid';

export function Technologies() {
  const renderProgress = () => {
    return technologies.map((tehnology) => {
      return (
        <div key={nanoid()} className='mb-4'>
          <Typography
            variant='h6'
            className='text-color mb-2 pl-4'
          >
            {tehnology.name}
          </Typography>
          <Progress
            value={tehnology.complited}
            size='lg'
            label={level(tehnology.complited)}
            color='blue-gray'
            className='bg-gradient-to-r from-white to-deep-orange-200'
          />
        </div>
      );
    });
  };

  return (
    <div>
      <Typography variant='h2' className='text-color mb-6'>
        Технологии, которыми я пользуюсь
      </Typography>
      {renderProgress()}
    </div>
  );
}
