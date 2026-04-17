function AuthLink({ text, linkText, href }) {
  return (
    <div className="mt-6 flex justify-center">
      <span className="text-center text-gray-500">
        {text}{" "}
        <a
          href={href}
          className="text-blue-600 font-bold hover:underline"
        >
          {linkText}
        </a>
      </span>
    </div>
  );
}

export default AuthLink;