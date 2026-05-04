import {Routes, Route} from 'react-router-dom';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import {useAuth} from '../hooks/useAuth';

function AuthRoutes() {
  const {user} = useAuth();
  return 
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </Routes>
}