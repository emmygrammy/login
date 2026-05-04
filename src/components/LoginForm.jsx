import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/auth';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import Spinner from './spinner';



export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  



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


  

  const handleLogin = async (e) => {
  e.preventDefault();
  console.log("LOGIN CLICKED"); // 👈 ADD THIS

  const errors = validate();

  if (Object.keys(errors).length > 0) {
    setErrors(errors);
    return;
  }

  try {
    setLoading(true);
    setErrors({});

    const data = await loginUser({ email, password });

    if (!data.token) {
      throw new Error("Invalid login credentials");
    }

    localStorage.setItem("token", data.token);

    navigate("/dashboard");

  } catch (err) {
    setErrors({ error: err.message });
  } finally {
    setLoading(false);
  }
};
 
  
  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* error message */}
      <div className="text-center text-red-500">
        {errors.error}
      </div>



      <h1 className="text-2xl font-bold text-center text-gray-800 ">
        Welcome back!
        </h1>
       
     
        <p className="text-center text-gray-500 ">
          Enter your credentials to access your account
        </p>
       

        {/* login form */}
        <form onSubmit={handleLogin}>
          <Input
            label="Email address"
            type="email"
            id="email"
            placeholder="email address"
            value={email}
            disabled={loading}
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
            disabled={loading}
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
          disabled={loading}
          className="w-full"
          type="submit"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Spinner />
                      Logging in...
                    </span>
                  ) : (
                    "Login"
                  )}
      </Button>
      </form>
    

    </div>
  );
}
