import { Suspense } from 'react';
import { SpeedDialComp } from '../shared/SpeedDialComp';
import { Header } from '../widgets/Header';
import { Outlet } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

function App() {
  return (
    <main
      className={`${
        import.meta.env.PROD ? 'bg-[url("../img/drawing.webp")]' : 'bg-[url("img/drawing.webp")]'
      } h-screen overflow-y-scroll bg-auto bg-fixed bg-right-top bg-no-repeat dark:bg-gray-900`}
    >
      <Header>
        <div>
          <Suspense fallback={<Spinner color='red' className='fixed left-1/2 top-1/2 h-24 w-24' />}>
            <Outlet />
          </Suspense>
          <SpeedDialComp />
        </div>
      </Header>
    </main>
  );
}

export default App;
