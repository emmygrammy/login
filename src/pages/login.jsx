import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


export default function LoginPage(){
  return(
    <>
          <Login/>
          <SocialMedia/>
          <SignUp/>
    </>
  );
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail('');
    setPassword('');
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Welcome back!
        </h1>
       
     
        <p className="text-center text-gray-500 mb-8">
          Enter your credentials to access your account
        </p>
       

        {/* login form */}
        <form onSubmit={handleSubmit}>
          <Input
          className="mb-8"
            label="Email address"
            type="email"
            id="email"
            placeholder="email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-end">
            <span className="text-sm text-gray-600">
                <a href="#" className="text-blue-600 hover:underline">Forgot password</a>
            </span>
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
    

            {/*  */}
      <div className="flex items-center my-4">
       <div className="flex-grow border-t border-gray-300"></div>
        <span>or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

               {/* sign up with social media */}  
        <span className="text-center text-gray-500">
            <a href="#" className="text-blue-600 text-sm hover:underline ">
            </a>
        </span> 
    </div>
  );
}

 function SocialMedia(){
          return(
            <div className="flex justify-center gap-10 mt-10">
  
            <button className="bg-white text-black px-3 py-1 rounded-[20px] border border-gray-300 flex items-center gap-3 hover:bg-[#3A5B22] transition duration-200 hover:text-white">
                <FcGoogle size={24} />
                <span>Sign up with Google</span>
            </button>

            <button className="bg-white text-black px-3 py-1 rounded-[20px] border border-gray-300 flex items-center gap-3 hover:bg-[#3A5B22] transition duration-200 hover:text-white">
                <FaApple size={24} />
                <span>Sign up with Apple</span>
            </button>

        </div>
        );
      }

      function SignUp(){
        return(
          <div className="mt-6 flex justify-center">
            <span className="text-center text-gray-500">
                Don't have an account? <a href="#" className="text-blue-600  text-1xl font-bold hover:underline ">
                    Sign up
                </a>
            </span>
        </div>
          
        );
      }
