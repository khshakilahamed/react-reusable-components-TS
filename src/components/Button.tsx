/* eslint-disable react/prop-types */
import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonType = {
  color?: "primary" | "light" | "warning" | "danger" | "success" | "dark";
  variant?: "filled" | "outlined";
  children: ReactNode;
  className?: string;
} & ComponentProps<"button">;

const Button = ({
  color = "primary",
  variant = "filled",
  children,
  className,
  ...rest
}: ButtonType) => {
  const colors = {
    primary:
      "bg-blue-700 hover:bg-blue-800 border border-blue-700 transition-colors",
    light:
      "bg-white hover:bg-gray-100 text-black border transition-colors focus:ring-gray-100",
    warning:
      "bg-yellow-600 hover:bg-yellow-700 text-white border border-yellow-600 transition-colors focus:ring-yellow-300",
    danger:
      "bg-red-600 hover:bg-red-700 text-white border border-red-600 transition-colors focus:ring-red-300",
    success:
      "bg-green-600 hover:bg-green-700 text-white border border-green-600 transition-colors focus:ring-green-300",
    dark: "bg-black hover:bg-gray-800 text-white border border-black transition-colors focus:ring-gray-300",
  };

  const variants = {
    filled: "",
    outlined: "bg-transparent text-black hover:text-white",
  };
  return (
    <button
      className={twMerge(
        "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none",
        colors[color],
        variants[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
