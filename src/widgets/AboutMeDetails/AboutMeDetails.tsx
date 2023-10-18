import { Typography } from '@material-tailwind/react';
import React from 'react';

export function AboutMeDetails() {
  return (
    <div className='my-10'>
      {/* <Typography variant='h2' className='text-color my-10'>
        Заголовок (нужен ли?):
      </Typography> */}
      <Typography
        variant='paragraph'
        className='text-color indent-10'
      >
        В 2019 году я (до этого даже не задумывался - как
        это?) заинтересовался механизмом создания,
        функционирования и поддержки сайтов. Вникнув в суть
        - решил обрести ещё одну профессию.
      </Typography>
      <Typography
        variant='paragraph'
        className='text-color indent-10'
      >
        Понимая, что путь самоучки тернист и не всегда по
        прямой - решил обучаться в Skillbox (не реклама)). В
        данной школе успешно окончил следующие курсы:
        <ul>
          <li>- вёрстка;</li>
          <li>- продвинутая вёрстка;</li>
          <li>- JavaScript;</li>
          <li>- продвинутый JavaScript;</li>
          <li>- React.</li>
        </ul>
      </Typography>
      <Typography
        variant='paragraph'
        className='text-color indent-10'
      >
        Начал проходить курсы по Node.js и PHP, но пока
        поставил на паузу, столкнувшись с громадным потоком
        информации. Решил углубиться во фронт, что бы стать
        действительно хорошим специалистом в этой области,
        естественно, с дальнейшим изучением и бэка.
      </Typography>
      <Typography
        variant='paragraph'
        className='text-color indent-10'
      >
        Начал брать заказы на фрилансе. Проекты, над
        которыми я работал различались по стеку. Были
        проекты с "чистой" вёрсткой, бывали со специфической
        (для телевизоров), были проекты на "ванильном" JS,
        приходилось "плотно" работать с канвасом, и,
        конечно, (куда уж без них) были проекты с
        библиотеками (Ract, Next, Jest, Cypress, MUI и
        т.д.). Приходилось работать в командах.
      </Typography>
      <Typography
        variant='paragraph'
        className='text-color indent-10'
      >
        Что касается "soft skills" - внимательно отношусь к
        дедлайнам, нормально уживаюсь в коллективах,
        тактичен, дисциплинирован, всегда на связи.
        Подтверждением этому служит, в том числе, и
        отсутствие отрицательных отзывов на фрилансе.
      </Typography>
    </div>
  );
}
