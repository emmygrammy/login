import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialMedia from '../components/SocialMedia';
import AuthLink from '../components/AuthLink';
import Divider from '../components/Divider';
import LoginImage from '../components/LoginImage';
import { loginUser } from '../services/api';







export default function LoginPage(){

  return(
   <div className="flex flex-col md:flex-row min-h-screen">

  {/* LEFT SIDE - FORM */}
  <div className="md:w-1/2 flex items-center justify-center">
    <div className="w-full max-w-md space-y-6">
      <LoginForm />
      <Divider />
      <SocialMedia />
      <AuthLink 
        text="Don't have an account?" 
        linkText="Sign up" 
        href="/register"
      />
    </div>
  </div>

  {/* RIGHT SIDE - IMAGE */}
  <div className="md:w-1/2 flex items-center justify-center bg-gray-100">
    <LoginImage />
  </div>

</div>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});

        const validate = () => {
          const newErrors = {};

          if (!email) {
            newErrors.email = 'Email address is required';
          }else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Enter a valid email";
          }
          if (!password) {
          newErrors.password = 'Password is required';
        }

        if (password && password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters';
        }

        if (password && !/[a-zA-Z]/.test(password)) {
          newErrors.password = 'Password must contain at least one letter';
        }

        if (password && !/[0-9]/.test(password)) {
          newErrors.password = 'Password must contain at least one number';
        }

        if (password && !/[!@#$%^&*()_+\-=\[\]{}|;:'",.<>\/?]/.test(password)) {
          newErrors.password = 'Password must contain at least one special character';
        }
          return newErrors;
        }   


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setErrors({});
    console.log(email, password);
    setEmail('');
    setPassword('');
  }

  const handleLogin = async () => {
  const data = await loginUser(email, password);
  localStorage.setItem("token", data.token);
  };
  
  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 ">
        Welcome back!
        </h1>
       
     
        <p className="text-center text-gray-500 ">
          Enter your credentials to access your account
        </p>
       

        {/* login form */}
        <form onSubmit={handleSubmit}>
          <Input
            label="Email address"
            type="email"
            id="email"
            placeholder="email address"
            value={email}
            onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prev) => ({ ...prev, email: '' }));
}}
          />
          <p className="text-sm text-red-500">{errors.email}</p>
          

          <div className="flex justify-end text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>


          <Input
            label="Password"
            type="password"
            id="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => {
            setPassword(e.target.value);
            setErrors((prev) => ({ ...prev, password: '' }));
         }}
            
          />
          <p className="text-sm text-red-500">{errors.password}</p>

        <label className="flex items-center text-sm text-gray-600 mt-2 mb-6">
          <input 
          type="checkbox" 
          className="mr-2" 
          checked={remember} 
          onChange={(e) => setRemember(e.target.checked)} />
          Remember for 30 days
        </label>
      

        <Button
        onClick={handleLogin}
        className="w-full" type="button">
            Login
        </Button>
      </form>
    

    </div>
  );
}

 

      