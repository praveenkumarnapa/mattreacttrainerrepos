import { useEffect, useRef } from 'react';
import {mount} from 'static_pages/HomePage';

const HomePage = () : JSX.Element => {

  const homepagediv = useRef<HTMLDivElement>(null);

  useEffect( () => {
    mount(homepagediv.current);
  } , []);

  return (
    <div ref={homepagediv} />
  );
}

export default HomePage;
