"use client";
import React, { Dispatch, FC, SetStateAction } from "react";
import {
  IconHome,
  IconUserFilled,
  IconSettingsFilled,
  IconBrandGithubFilled,
  IconBrandBitbucket,
  IconKeyboard,
  IconMenu,
} from "@tabler/icons-react";
import Link from "next/link";

interface Props{
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const MobileNav: FC<Props> = ({setIsOpen}) => {
  return (
    <>
    <div className="fixed left-8 top-4 border-2 border-elegantPink flex justify-center items-center rounded-full bg-customGrey h-10 w-10 z-30">
    <p>SJ</p>
  </div>
    <div className="h-5/6 w-5/6 flex justify-center items-center bg-black bg-opacity-90 fixed top-0 z-20 border-r border-b border-customGrey">
      <div className="text-elegantPink flex flex-col gap-16">
      <Link href="/">
        <button 
        onClick={() => setIsOpen(false)}
        className="flex gap-4">
          <IconHome />
          <p>Home</p>
        </button>
      </Link>
      <Link href="/">
        <button 
        onClick={() => setIsOpen(false)}
        className="flex gap-4">
          <IconUserFilled />
          <p>About me</p>
        </button>
        </Link>
        <button className="flex gap-4">
          <IconBrandGithubFilled />
          <p>Github</p>
        </button>
        <button className="flex gap-4">
          <IconBrandBitbucket />
          <p>Bitbucket</p>
        </button>
        <button className="flex gap-4">
          <IconKeyboard />
          <p>My work</p>
        </button>
        <button className="flex gap-4">
          <IconSettingsFilled />
          <p>Settings</p>
        </button>
      </div>
    </div>
    </>
  );
};
