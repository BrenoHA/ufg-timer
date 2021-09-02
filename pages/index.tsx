import type { NextPage } from 'next';
import TimerComponent from '../src/components/Timer';
import Tilt from 'react-parallax-tilt';

const Home: NextPage = () => {
  console.log('%cby BrenoHA', 'color: #4f4f; font-family:monospace; font-size: 22px');

  return (
    <>
      <Tilt>
        <TimerComponent />
      </Tilt>
    </>
  );
};

export default Home;
