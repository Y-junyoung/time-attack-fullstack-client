import { ComponentProps, useId } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  const id = useId();

  return (
    <div className="grid gap-y-2 w-[400px]">
      <label htmlFor={id} className="text-lg font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-400"
        {...props}
      />
    </div>
  );
}

export default Input;
