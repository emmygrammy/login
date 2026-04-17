import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialMedia from '../components/SocialMedia';
import AuthLink from '../components/AuthLink';
import Divider from '../components/Divider';
import LoginImage from '../components/LoginImage';







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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail('');
    setPassword('');
  }
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
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex justify-end text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>


          <Input
          className="mb-8"
            label="Password"
            type="password"
            id="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        <label className="flex items-center text-sm text-gray-600 mt-2 mb-6">
          <input type="checkbox" className="mr-2" />
          Remember for 30 days
        </label>
      

        <Button
        className="w-full" type="submit">
            Login
        </Button>
      </form>
    

    </div>
  );
}

 

      