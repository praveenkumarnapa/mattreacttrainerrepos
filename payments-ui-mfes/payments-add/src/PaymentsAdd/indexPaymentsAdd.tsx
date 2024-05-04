import ReactDOM from 'react-dom/client';
import './../index.css';
import PaymentsAdd, { PaymentsAddProps } from './PaymentsAdd';

type MountReturnType = { propsChanged : (newProps : PaymentsAddProps) => void}

const mount = (el: Element, props: PaymentsAddProps) : MountReturnType => {

  const root : ReactDOM.Root = ReactDOM.createRoot(el);
  root.render(<PaymentsAdd {...props} />);

  const receiveNewProps = (newProps : PaymentsAddProps) => {
   root.render(<PaymentsAdd {...newProps} />);
  }

  return {propsChanged : receiveNewProps}
}

export { mount };
