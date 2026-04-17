import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function SocialMedia(){
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