import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  color?: "white" | "sky";
}

function Button({
  color = "white",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="border rounded border-slate-700 py-4 px-10 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-[200px] data-[color=sky]:bg-sky-400 data-[color=sky]:text-white"
      data-color={color}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
