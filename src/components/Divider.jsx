export default function Divider(){
  return (
    <div className="flex items-center my-4 max-w-md mx-auto">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="px-2 text-gray-500">or</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}