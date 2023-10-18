import { Typography } from '@material-tailwind/react';
import React from 'react';

export function Hi() {
  return (
    <div className='m-10'>
      <Typography
        variant='h1'
        className='text-color mb-4 text-center'
      >
        Привет!
      </Typography>
      <div className='flex items-center'>
        <div
          className='aspect-square basis-2/6 rounded-full opacity-80 dark:opacity-50'
          style={{
            backgroundImage: 'url(/src/assets/white1.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className='max-h-80 basis-4/6 overflow-y-scroll pl-8'>
          <Typography
            variant='paragraph'
            className='text-color hyphens-auto text-justify indent-10'
          >
            Меня зовут Роман, я фронтенд-разработчик. Этот
            сайт - моя визитная карточка, которая позволит
            Вам увидеть, как я оказался во фронтенде, какими
            профессиональными и личными навыками обладаю,
            какие технологии применяю в своей работе.
          </Typography>
          <Typography
            variant='paragraph'
            className='text-color hyphens-auto text-justify indent-10'
          >
            Сайт адаптивный, имеет две темы (день-ночь),
            некоторые элементы могут показаться избыточными,
            но уж сильно они прикольные). К дизайну прошу
            отнестись со снисхождением - я всё же фронт...)
          </Typography>
          <Typography
            variant='paragraph'
            className='text-color hyphens-auto text-justify indent-10'
          >
            Если Вас заинтересует моя профессиональная
            деятельность - со мной можно связаться по одному
            из контактов, которые можно увидеть при
            наведении курсора на крестик в правом нижнем
            углу (для удобства контакт будет скопирован при
            клике по нему) или на странице "О себе".
          </Typography>
          <Typography
            variant='paragraph'
            className='text-color hyphens-auto text-justify indent-10'
          >
            Спасибо за уделённое мне время! Надеюсь Вам
            понравиться!
          </Typography>
        </div>
      </div>
    </div>
  );
}
