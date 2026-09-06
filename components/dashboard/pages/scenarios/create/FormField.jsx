export default function FormField({ label, required, error, children }) {
  return (
    <div>
      <label className="block font-semibold text-text-dark mb-2">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-red-500 text-xs mt-1.5 font-medium">{error}</p>
      )}
    </div>
  );
}

export const inputClass =
  "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-text-dark placeholder:text-text-primary outline-none focus:border-primary";
