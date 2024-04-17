import Image from "next/image";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container h-20 mx-auto flex flex-row justify-between items-center">
        <Image
          src="/doa-logo.png"
          alt="doa-production"
          width={100}
          height={90}
        />
        <AlignJustify />
      </div>
    </div>
  );
};

export default Navbar;
