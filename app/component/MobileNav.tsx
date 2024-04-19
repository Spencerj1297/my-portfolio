"use client";
import React, { Dispatch, FC, SetStateAction } from "react";
import {
  IconHome,
  IconUserFilled,
  IconSettingsFilled,
  IconBrandGithubFilled,
  IconBrandBitbucket,
  IconKeyboard,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileNav: FC<Props> = ({ setIsOpen }) => {
  return (
    <>
      <div className="fixed top-0 w-screen h-screen bg-black bg-opacity-75 bg-gradient-custom text-white z-50 flex flex-col gap-4 items-center justify-center">
        <Link href="/">
        <button
        onClick={() => setIsOpen(false)}
        >
          <IconHome size={48} />
        </button>
        </Link>
        <Link href="/about">
          <button onClick={() => setIsOpen(false)}>
            <IconUserFilled size={48} />
          </button>
        </Link>
        <a
          href="https://github.com/Spencerj1297"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            <IconBrandGithubFilled size={48} />
          </p>
        </a>
        <p>
          <IconBrandBitbucket size={48} />
        </p>
        <p>
          <IconSettingsFilled size={48} />
        </p>

        <button
          onClick={() => setIsOpen(false)}
          className="fixed right-0 top-1 text-white"
        >
          <IconX size={48} />
        </button>
      </div>
    </>
  );
};
