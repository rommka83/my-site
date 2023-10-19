/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import {
  Stepper,
  Step,
  Typography,
  Button,
} from '@material-tailwind/react';
import React from 'react';
import { about_me } from '../../assets/about_me';
import { nanoid } from 'nanoid';

export function AboutMe() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] =
    React.useState(false);

  const handleNext = () =>
    !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () =>
    !isFirstStep && setActiveStep((cur) => cur - 1);

  const renderSteps = () => {
    return about_me.map((step, index) => {
      return (
        <Step
          key={nanoid()}
          onClick={() => setActiveStep(index)}
          className='cursor-pointer bg-gray-300 dark:bg-gray-700'
          activeClassName='dark:bg-white dark:text-black'
          completedClassName='dark:bg-white dark:text-black'
        >
          {activeStep >= index && step.icon}
          {activeStep >= index && (
            <div className='absolute top-14 text-center sm:w-32 lg:w-40'>
              <Typography
                variant='h6'
                className='text-color'
              >
                {step.year}
              </Typography>
              <Typography className='text-color w-full px-2 font-normal'>
                {step.description}
              </Typography>
            </div>
          )}
        </Step>
      );
    });
  };

  return (
    <div className='container overflow-x-hidden px-6 md:px-14'>
      <Typography variant='h2' className='text-color my-10'>
        Это, прям, ну совсем если коротко:
      </Typography>
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        className='dark:text-green-400'
        lineClassName='dark:bg-gray-800'
        activeLineClassName='dark:bg-white'
      >
        {renderSteps()}
      </Stepper>
      <div className='mt-52 flex justify-between sm:mt-40 lg:mt-32'>
        <Button
          onClick={handlePrev}
          disabled={isFirstStep}
          className='bg-btn'
        >
          Назад
        </Button>
        <Button
          onClick={handleNext}
          disabled={isLastStep}
          className='bg-btn'
        >
          Вперёд
        </Button>
      </div>
    </div>
  );
}
