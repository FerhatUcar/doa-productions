import React, { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return <button className="bg-yellow-500 transition-all hover:scale-105 active:scale-95 hover:bg-yellow-600 rounded px-8 py-3 text-gray-800 font-bold uppercase">{children}</button>;
};

export default Button;
