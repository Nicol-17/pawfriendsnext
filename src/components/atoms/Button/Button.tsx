import { type ReactNode, type MouseEvent } from "react";

import Link from 'next/link'



type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset" | 'link';
  className?: string;
  destiny?: string;
 
};

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  destiny
}: ButtonProps) => {
    const baseClasses = `
    inline-flex 
    items-center 
    justify-center 
    rounded-[16px] 
    transition-colors 
    duration-300 
    ease-in-out 
    border-none 
    text-base 
    px-9 py-6 
    cursor-pointer 
    bg-primary
    text-white
    w-24
    h-14
    text-quicksand     
    hover:bg-[#56739b]
  `;

  if (type === 'link') {
    return <Link
      href={`${destiny}`}
      className={`${baseClasses} ${className}`}>
        {children}
      </Link>
  } else {
    return (
      <button
        type={type as 'button' | 'submit' | 'reset'}
        onClick={onClick}
        className={`${baseClasses} ${className}`}>
          
        {children}
      </button>
    );

  }
};

export default Button;
