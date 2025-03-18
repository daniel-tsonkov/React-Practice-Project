import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './hoc/mainLayout';
import Home from './components/home';
import Header from './components/navigation/header';
import Auth from './components/auth/index';
import { useDispatch, useSelector } from 'react-redux';
import {} from './store/actions/users';

const Router = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Router;
