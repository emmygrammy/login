import SocialMedia from '../components/SocialMedia';
import AuthLink from '../components/AuthLink';
import Divider from '../components/Divider';
import LoginImage from '../components/LoginImage';
import LoginForm from '../components/LoginForm';




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


 

      