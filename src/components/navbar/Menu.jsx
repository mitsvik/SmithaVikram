"use client"
import headerNavLinks from "@/content/headerNavLinks";
import React from "react";
import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathName = usePathname();
  return (
    <>
      {headerNavLinks.map(({ title, href }) => {
        const active = pathName?.includes(href);
        return (
          <Link href={href} 
          aria-label={title}
           key={title} className={classNames('font-mono horizontal-underline text-base pb-1',
            { 'horizontal-underline-active text-title': active })}>
            <span className="font-semibold tracking-wide font-mono">{title}</span>
          </Link>
        );
      })}
    </>
  );
};

export default Menu;
