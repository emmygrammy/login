function Button({ children, onClick, disabled, type = 'button' , className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#3A5B22] text-white px-4 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;