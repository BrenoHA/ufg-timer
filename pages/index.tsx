import type { NextPage } from 'next';
import TimerComponent from '../src/components/Timer';
import Tilt from 'react-parallax-tilt';

const Home: NextPage = () => {
  return (
    <>
      <Tilt>
        <TimerComponent />
      </Tilt>
    </>
  );
};

export default Home;
