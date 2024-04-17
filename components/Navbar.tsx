"use client";

import Image from "next/image";
import { AlignJustify, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { wait } from "next/dist/lib/wait";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen(!open);

  const handleMenuItem = async () => {
    await wait(250);
    handleMenu();
  };

  return (
    <div className="navbar">
      <div className="container h-20 mx-auto flex flex-row justify-between items-center">
        <Image
          onClick={() => router.push("/")}
          src="/doa-logo.png"
          alt="doa-production"
          width={100}
          height={90}
          className="cursor-pointer hover:scale-110 transition"
        />
        <button onClick={handleMenu}>
          <AlignJustify />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-zinc-800 fixed inset-0 h-screen p-2 z-20 transition-all">
            <button className="float-right mb-3 mr-3" onClick={handleMenu}>
              <X />
            </button>
            {links.map(({ href, label }) => (
              <Link href={href} key={href} onClick={handleMenuItem}>
                <button className="py-4 flex flex-row items-center justify-center gap-2 w-full h-32 hover:bg-zinc-700 transition-all">
                  <h2 className="uppercase text-xl font-black">{label}</h2>
                </button>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default Navbar;
