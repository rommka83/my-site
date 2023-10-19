import {
  SpeedDialHandler,
  IconButton,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
  SpeedDial,
} from '@material-tailwind/react';
import { copyContact } from './SpeedDial.service';

export function SpeedDialComp() {
  return (
    <div className='fixed bottom-10 right-10 z-10 md:right-20 lg:right-28'>
      <SpeedDial>
        <SpeedDialHandler className='bg-gray-800 dark:bg-gray-500'>
          <IconButton size='lg' className='rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6 transition-transform group-hover:rotate-45'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          <SpeedDialAction
            className='h-20 w-20 bg-red-300'
            onClick={() =>
              copyContact(
                'rommka_83@mail.ru',
                'почта успешно скопирована в буфер',
              )
            }
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
                d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
              />
            </svg>
            <Typography
              color='current'
              className='text-xs font-normal'
            >
              Почта
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction
            className='h-20 w-20 bg-red-300'
            onClick={() =>
              copyContact(
                'https://t.me/RomanN8322',
                'телеграмм успешно скопирован в буфер',
              )
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path d='M 19.976562 3.1210938 L 19.611328 3.2695312 C 19.611328 3.2695312 6.6375504 8.5740484 2.6132812 10.267578 L 2.0019531 10.525391 L 2.0019531 12.779297 L 6.9472656 14.755859 L 8.6796875 19.996094 L 10.251953 20.005859 L 12.955078 17.720703 L 16.355469 20.996094 L 18.808594 20.996094 L 21.964844 3.875 L 19.976562 3.1210938 z M 19.646484 5.4179688 L 17.146484 18.980469 L 13.044922 15.029297 L 10.224609 17.410156 L 11 14.375 L 17.28125 8 L 17.082031 7.7988281 C 17.082031 7.7988281 10.706702 11.473998 8.0019531 13.023438 L 4.5371094 11.638672 C 9.0770415 9.7455758 18.697943 5.8058761 19.646484 5.4179688 z'></path>
            </svg>
            <Typography
              color='current'
              className='text-xs font-normal'
            >
              Телеграмм
            </Typography>
          </SpeedDialAction>
          <SpeedDialAction
            className='h-20 w-20 bg-red-300'
            onClick={() =>
              copyContact(
                '+79644959666',
                'телефон успешно скопирован в буфер',
              )
            }
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
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
              />
            </svg>
            <Typography
              color='current'
              className='text-xs font-normal'
            >
              Телефон
            </Typography>
          </SpeedDialAction>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
