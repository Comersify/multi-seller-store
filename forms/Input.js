export const Input = ({ label, type, required = true, minLength = 8 }) => {
  return (
    <div className="block">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
        {label}
      </label>
      <input
        required={required}
        minLength={minLength}
        className="appearance-none focus:border-indigo-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={label}
      />
    </div>
  );
};
