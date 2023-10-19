import { Typography } from '@material-tailwind/react';

export function Contacts() {
  return (
    <div className='my-10'>
      <Typography variant='h2' className='text-color my-10'>
        Желательно в рабочее время по Москве:
      </Typography>
      <Typography
        variant='paragraph'
        className='text-color my-5 indent-10'
      >
        Телефон: +7-964-495-96-66
      </Typography>
      <Typography
        variant='paragraph'
        className='text-color my-5 indent-10'
      >
        Телеграмм: https://t.me/RomanN8322
      </Typography>
      <Typography
        variant='paragraph'
        className='text-color my-5 indent-10'
      >
        Почта: rommka_83@mail.ru
      </Typography>
      <Typography
        variant='paragraph'
        className='text-color my-10 indent-10'
      >
        Для удобства вы можете скопировать нужный контакт,
        кликнув на соответствующую кнопку, после наведения
        курсора на крестик в правом нижнем углу.
      </Typography>
    </div>
  );
}
