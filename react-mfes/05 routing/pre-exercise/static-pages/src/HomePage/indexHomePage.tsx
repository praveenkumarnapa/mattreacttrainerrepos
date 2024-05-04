import ReactDom from 'react-dom/client';
import './../index.css';
import HomePage, { HomePageProps } from './HomePage';

type mountReturnType = { onLoginStateChanged : (newId: number) => void};

const mount = (el: Element, props: HomePageProps) : mountReturnType => {

  const root = ReactDom.createRoot(el);

  root.render(<HomePage {...props} />);

  const parentLoginStateChanged = (newId : number) => {
    root.render(<HomePage {...props} id = {newId} />);
  }

  return {onLoginStateChanged : parentLoginStateChanged}
}

export { mount };
