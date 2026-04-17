function Login() {
  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        welcome back!
        </h1>
        <br />
     
        <p className="text-center text-gray-500">
          Enter your credentials to acess your account
        </p>
        <br />

        {/* login form */}
        <form>
        <label className="block text-gray-700 font-bold">
          Email adress:
          <input 
          type="text" 
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="email adress" 
          name="email" 
          id="email" />
        </label>

          <span className="flex justify-end mt-2">
            <a href="#" className="text-blue-600 text-sm hover:underline ">
                Forget password
            </a>
          </span>
        <label className="block text-gray-700 font-bold">
            Password:
          <input 
          type="password" 
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="password" 
          name="password" 
          id="password" />
        </label>
        <br />

        <span className="text-black-500 text-sm">
          <input type="checkbox" className="mr-2" />
          Remember for 30 days
        </span>
        <br />
        <br />

        <button 
        className="w-full p-2 bg-[#3A5B22] text-white rounded-md" type="submit">
            login
        </button>
      </form>
      <br />

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