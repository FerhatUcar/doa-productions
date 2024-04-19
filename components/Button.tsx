import React, { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return <button className="btn transition-all hover:scale-105 active:scale-95 px-8 py-3 text-white font-bold uppercase w-full">{children}</button>;
};

export default Button;
