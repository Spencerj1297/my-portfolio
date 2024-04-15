'use client'
import Link from "next/link";
import {
  IconHome,
  IconUserFilled,
  IconSettingsFilled,
  IconBrandGithubFilled,
  IconBrandBitbucket,
  IconKeyboard,
  IconMenu,
} from "@tabler/icons-react";
import { useState } from "react";
import { MobileNav } from "./MobileNav";

const Sidebar = () => {

  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const handleClick = () => {
    const projectSection = document.getElementById("projectSection");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hidden md:flex h-screen w-16 fixed right-0 overflow-y-auto flex-col justify-center items-center z-20">
        <div className="pt-2">
          <ul>
            <li>
              <div className="border-2 border-aqua flex justify-center items-center rounded-full bg-customGrey h-8 w-8">
                <p className="font-bold">SJ</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center flex-grow">
          <ul className="mt-6 space-y-12">
            <li className="mb-4">
              <Link href="/">
                <p className="text-white hover:text-aqua hover:bg-customGrey hover:bg-opacity-10 rounded-lg p-1">
                  <IconHome />
                </p>
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/">
                <p className="text-white hover:text-aqua hover:bg-customGrey hover:bg-opacity-10 rounded-lg p-1">
                  <IconUserFilled />
                </p>
              </Link>
            </li>
            <li className="mb-4">
                <button
                onClick={handleClick}
                className="text-white hover:text-aqua hover:bg-customGrey hover:bg-opacity-10 rounded-lg p-1">
                  <IconKeyboard />
                </button>
            </li>
            <li className="mb-4">
              <a
                href="https://github.com/Spencerj1297"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white hover:text-aqua hover:bg-customGrey hover:bg-opacity-10 rounded-lg p-1">
                  <IconBrandGithubFilled />
                </p>
              </a>
            </li>
            <li className="mb-4">
              <a href="" target="_blank" rel="noopener noreferrer">
                <p className="text-white hover:text-aqua hover:bg-customGrey hover:bg-opacity-10 rounded-lg p-1">
                  <IconBrandBitbucket />
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div className="pb-2">
          <ul>
            <li>
              <p className="text-white hover:text-elegantPink hover:bg-customGrey hover:bg-opacity-10 rounded-lg p-1">
                <IconSettingsFilled />
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden flex fixed right-0 z-20">
        <div className="pt-2">
          <ul>
            <li>
              <button 
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="text-white hover:text-elegantPink hover:bg-customGrey hover:bg-opacity-10 rounded-lg p-1">
                <IconMenu />
              </button>
            </li>
          </ul>
        </div>
      </div>
      {mobileNavOpen && (
        <MobileNav setIsOpen={setMobileNavOpen}/>
      )}
    </>
  );
};

export default Sidebar;
