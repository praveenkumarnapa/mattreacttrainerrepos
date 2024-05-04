import './App.css';
import PaymentsAdd from './remoteComponents/PaymentsAdd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHeader from './components/pageHeader/PageHeader';
import HomePage from './remoteComponents/HomePage';
import PageNotFound from './remoteComponents/PageNotFound';
import { lazy } from 'react';

const PaymentsList = lazy( () => import('./remoteComponents/PaymentsList') );

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/find" element={<PaymentsList />} />
        <Route path="/add" element={<PaymentsAdd />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
