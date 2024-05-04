import './App.css';
import PaymentsAdd from './PaymentsAdd/PaymentsAdd';

function App() {
  return (
    <div>
      <h1>Payments add app</h1>
      <PaymentsAdd serverUrl="dummy-server-url"/>
    </div>
  );
}

export default App;
