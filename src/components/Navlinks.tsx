"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const Navlinks = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const pathName = usePathname();

  const isActive = href === "/" ? pathName === "/" : pathName.startsWith(href);

  return (
    <Link
      href={href}
      className={`${isActive ? "text-primary" : ""} font-medium`}
    >
      {children}{" "}
    </Link>
  );
};

export default Navlinks;
