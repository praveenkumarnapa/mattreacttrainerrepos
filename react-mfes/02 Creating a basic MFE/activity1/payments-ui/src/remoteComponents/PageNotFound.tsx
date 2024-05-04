import { useEffect, useRef } from 'react';
import {mount} from 'static_pages/PageNotFound';

const PageNotFound = () : JSX.Element => {

  const pagenotfounddiv = useRef<HTMLDivElement>(null);

  useEffect( () => {
    mount(pagenotfounddiv.current);
  } , []);

  return (
    <div ref={pagenotfounddiv} />
  );
}

export default PageNotFound;
