import ReactDOM from 'react-dom/client';
import './../index.css';
import PaymentsList from './PaymentsList';
import { BrowserRouter } from 'react-router-dom';

const mount = (el: Element) : void => {

  const root : ReactDOM.Root = ReactDOM.createRoot(el);

  root.render(<BrowserRouter>
  <PaymentsList />
  </BrowserRouter>);
}

export { mount };
