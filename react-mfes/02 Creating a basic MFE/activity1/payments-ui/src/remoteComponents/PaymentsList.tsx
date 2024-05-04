import { useEffect, useRef } from 'react';
import {mount} from 'payments_list/PaymentsList';

const PaymentsList = () : JSX.Element => {

  const paymentslistdiv = useRef<HTMLDivElement>(null);

  useEffect( () => {
    mount(paymentslistdiv.current);
  } , []);

  return (
    <div ref={paymentslistdiv} />
  );
}

export default PaymentsList;
