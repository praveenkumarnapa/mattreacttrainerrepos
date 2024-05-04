import { useEffect, useRef, useState } from 'react';
import {mount} from 'payments_add/PaymentsAdd';

const PaymentsAdd = () : JSX.Element => {

  type MountReturnType = {propsChanged : (newProps: {serverUrl : string}) => void} 
  
  const [mountReturn, setMountReturn] = useState<MountReturnType | null>(null);
  const [serverUrl, setServerUrl] = useState<string>("hello");

  const paymentsadddiv = useRef<HTMLDivElement>(null);
 
  useEffect( () => {
    const result : MountReturnType = mount(paymentsadddiv.current, {serverUrl : serverUrl});
    setMountReturn(result);
  } , []);

  useEffect( () => {
    mountReturn?.propsChanged({serverUrl : serverUrl});
  }, [serverUrl])

  const handleClick = () => {
      setServerUrl("something different");
  }

  return (<>
    <div ref={paymentsadddiv} />
    <button onClick={handleClick}>click me</button>
    </>    
    

  );
}

export default PaymentsAdd;
