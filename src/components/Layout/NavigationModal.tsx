import { useState } from "react";
import Link from "next/link";
import { PAGE_LINKS } from "@/utils/constants";

interface NavigationModalProps {
  onNavigate: VoidFunction;
}

export const NavigationModal: React.FC<NavigationModalProps> = ({
  onNavigate,
}) => {
  // Here I can use spring transition bullshit

  // Here also a transition for the items appearing, can copy this from somehere for sure

  return (
    <div className="flex flex-col z-50 bg-[#F3F3F3] fixed top-0 left-0 h-screen w-screen py-24 px-16">
      {PAGE_LINKS.map(({ label, to }) => (
        <Link href={to} key={label}>
          <a className="mb-8 text-4xl" onClick={onNavigate}>
            {label}
          </a>
        </Link>
      ))}

      <Link href="/get-in-touch">
        <a
          className="text-4xl px-8 text-center py-5 leading-none border-2 rounded  border-black text-white hover:text-black bg-black hover:bg-transparent"
          onClick={onNavigate}
        >
          Get in Touch
        </a>
      </Link>
    </div>
  );
};
