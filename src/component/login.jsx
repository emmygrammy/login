import { useState } from 'react';



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
        welcome back!
        </h1>
       
     
        <p className="text-center text-gray-500 mb-8">
          Enter your credentials to acess your account
        </p>
       

        {/* login form */}
        <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-gray-700 font-bold">
          Email adress:
        </label>
         <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="email adress" 
          name="email" 
          id="email" />

          <span className="flex justify-end mt-2">
            <a href="#" className="text-blue-600 text-sm hover:underline ">
                Forget password
            </a>
          </span>
        <label htmlFor="password" className="block text-gray-700 font-bold mb-4">
            Password:
        </label>
        <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" 
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="password" 
          name="password" 
          id="password" />
        

        <span className="flex items-center text-sm text-gray-600 mt-2 mb-6">
          <input type="checkbox" className="mr-2" />
          Remember for 30 days
        </span>
       

        <button 
        className="w-full p-2 bg-[#3A5B22] text-white rounded-md mt-4" type="submit">
            login
        </button>
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
 
         <div className="flex justify-center gap-10 mt-10">
  
            <button className="bg-white text-black px-3 py-1 rounded-[20px] border border-gray-300 flex items-center gap-3 hover:bg-[#3A5B22] transition duration-200 hover:text-white">
                <span >🎲</span>
                <span>Sign up with Google</span>
            </button>

            <button className="bg-white text-black px-3 py-1 rounded-[20px] border border-gray-300 flex items-center gap-3 hover:bg-[#3A5B22] transition duration-200 hover:text-white">
                <span>🍎</span>
                <span>Sign up with Apple</span>
            </button>

        </div>

        <div className="mt-6 flex justify-center">
            <span className="text-center text-gray-500">
                Don't have an account? <a href="#" className="text-blue-600  text-1xl font-bold hover:underline ">
                    Sign up
                </a>
            </span>
        </div>
    </div>
  );
}

export default Login;