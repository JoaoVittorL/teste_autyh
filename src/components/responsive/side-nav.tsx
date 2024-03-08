"use client";

import React, { useState } from "react";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDENAV_ITEMS } from "../../../constants";
import { SideNavItem } from "@/types/rote";
import { Icon } from "@iconify/react";
import Image from "next/image";
import OutForm from "../button-out";

const SideNav = () => {
  return (
    <div className="md:w-60  h-screen flex-1 fixed border-r border-zinc-200 dark:border-green-900 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 dark:border-green-900 h-12 w-full"
        >
          <Image
            src={Logo}
            width={24}
            height={24}
            alt="Logo da empresa ecoelétrica"
          />
          <span className="font-bold text-xl hidden md:flex">Ecoelétrica</span>
        </Link>
        <div className="flex flex-col space-y-2 justify-between h-full">
          <div className="flex flex-col space-y-2 md:px-6 ">
            {SIDENAV_ITEMS.map((item, idx) => {
              return <MenuItem key={idx} item={item} />;
            })}
          </div>
          <div className="flex mx-auto p-6">
            <OutForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="dark:bg-blue-dark-900">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 dark:hover:text-blue-dark-900 ${
              pathname.includes(item.path) ? "bg-zinc-100" : ""
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold text-xl  flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? "font-bold" : ""
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg transition-all hover:bg-zinc-100  hover:dark:text-blue-dark-900 ${
            item.path === pathname ? "bg-zinc-100 dark:text-blue-dark-900" : ""
          }`}
        >
          {item.icon}
          <span className="font-semibold text-xl flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};
