import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { ThemeSwitcher } from '../../shared/ThemeSwitcher';
import { Link } from 'react-router-dom';
interface IHeader {
  children?: JSX.Element;
}

export function Header({ children }: IHeader) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-normal'
      >
        <Link
          to='/projects'
          className='text-color flex items-center'
        >
          Проекты
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-normal'
      >
        <Link
          to='/technologies'
          className='text-color flex items-center'
        >
          Технологии
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-normal'
      >
        <Link
          to='/about-me'
          className='text-color flex items-center'
        >
          О себе
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className='max-h-[768px] w-full overflow-scroll'>
      <Navbar className='my-shadow sticky top-0 z-10 h-max max-w-full rounded-none border-transparent py-2 shadow-lg dark:bg-gray-900 lg:px-8 lg:py-4'>
        <div className='container flex items-center justify-between'>
          <Typography
            href='#'
            className='mr-4 cursor-pointer py-1.5 font-medium'
          >
            <Link
              to='/'
              className='text-color flex items-center'
            >
              Главная
            </Link>
          </Typography>
          <div className='flex items-center gap-4'>
            <div className='mr-4 hidden lg:block'>
              {navList}
            </div>
            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-gray-800 hover:bg-transparent focus:bg-transparent active:bg-transparent dark:text-gray-500 lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <ThemeSwitcher />
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>

      <div className='container mx-auto py-12'>
        {children}
      </div>
    </div>
  );
}
