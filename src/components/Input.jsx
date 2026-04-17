function Input({ 
    children, 
    label, 
    onClick,
    disabled, 
    type = 'text' , 
    className = '', 
    id = '', 
    placeholder = '',
    value = '',
    onChange = () => {}

}) {
  return (
    <div >
 <label htmlFor={id} className="block text-gray-700 font-bold mb-1">
        {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      onClick={onClick}
      disabled={disabled}
      onChange={onChange}
      value={value}
      className={`w-full p-2 border border-gray-300 rounded-md ${className}`}
    />
    </div>
   
  );
}

export default Input;