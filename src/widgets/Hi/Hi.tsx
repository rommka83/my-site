import { Typography } from '@material-tailwind/react';

export function Hi() {
  return (
    <div className='my-10'>
      <Typography variant='h1' className='text-color mb-4 text-center'>
        Привет!
      </Typography>
      <div className='flex items-center'>
        <div
          className={`${
            import.meta.env.PROD ? 'bg-[url("../img/white1.webp")]' : 'bg-[url("img/white1.webp")]'
          } aspect-square basis-2/6 rounded-full bg-cover opacity-80 dark:opacity-50`}
        ></div>
        <div className='max-h-80 basis-4/6 overflow-y-scroll pl-8'>
          <Typography
            variant='paragraph'
            className='text-color hyphens-auto text-justify indent-4 md:indent-8'
          >
            Меня зовут Роман, я фронтенд-разработчик. Этот сайт - моя визитная карточка, которая
            позволит вам увидеть, как я оказался во фронтенде, какими профессиональными и личными
            навыками обладаю, какие технологии применяю в своей работе.
          </Typography>
          <Typography
            variant='paragraph'
            className='text-color hyphens-auto text-justify indent-4 md:indent-8'
          >
            Сайт адаптивный, имеет две темы (день-ночь), некоторые элементы могут показаться
            избыточными, но уж очень они прикольные). К дизайну прошу отнестись со снисхождением - я
            всё же фронт...)
          </Typography>
          <Typography
            variant='paragraph'
            className='text-color hyphens-auto text-justify indent-4 md:indent-8'
          >
            Если вас заинтересует моя профессиональная деятельность - со мной можно связаться по
            одному из контактов, которые можно увидеть при наведении курсора на крестик в правом
            нижнем углу (для удобства контакт будет скопирован при клике по нему) или на странице "О
            себе".
          </Typography>
          <Typography
            variant='paragraph'
            className='text-color hyphens-auto text-justify indent-4 md:indent-8'
          >
            Спасибо за уделённое время! Надеюсь вам понравится!
          </Typography>
        </div>
      </div>
    </div>
  );
}
