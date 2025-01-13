import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex">
      <Link href="/">Logo</Link>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
