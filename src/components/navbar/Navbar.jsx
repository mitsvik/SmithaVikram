"use client"
import React from "react";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName=usePathname();
  return (
    <header className="z-20 py-5 md:py-10 mx-5">
      <div className="mx-auto flex items-center justify-between md:max-w-3xl  xl:max-w-5xl">
        <div>
            <Link href='/'
            aria-label="smitha"
            className={classNames('font-mono horizontal-underline text-base pb-1 font-semibold', {
              'horizontal-underline-active text-title': pathName==='/'
            }
            )}>
            Smitha Vikram
            </Link>
        </div>
        <div className="flex items-center">
            <div className="space-x-5 hidden md:flex" >
            <Menu />

            </div>
            <div className="flex items-center ">
                <ThemeSwitch />
                <Sidebar />
            </div>
          
        </div>

      </div>
    </header>
  );
};

export default Navbar;
