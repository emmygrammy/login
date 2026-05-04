import logo from './logo.svg';
import './index.css';
import LoginPage from './pages/login';



function App() {
   const {user} = useAuth();

  return (
    <div className="App">
      {user ? <RegisterPage /> : <LoginPage />}
     
  
     
    </div>
  );
}

export default App;
