import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import OrderEntry from './pages/OrderEntry';
import AppProvider from './context/AppProvider';

export function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/orders/entry" element={<OrderEntry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppProvider>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
