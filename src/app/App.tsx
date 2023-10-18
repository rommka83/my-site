import { SpeedDialComp } from '../shared/SpeedDialComp';
import { Header } from '../widgets/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className='h-screen dark:bg-gray-900'>
      <div
        className='h-full'
        style={{
          backgroundImage: 'url(/drawing.png)',
          backgroundSize: '500px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 20%',
        }}
      >
        <Header>
          <div>
            <Outlet />
            <SpeedDialComp />
          </div>
        </Header>
      </div>
    </main>
  );
}

export default App;
