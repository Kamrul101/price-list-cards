import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <nav className="bg-purple-200">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <span>
            {open === true ? (
              <XMarkIcon className="h-7 w-7 text-purple-500" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-purple-500" />
            )}
          </span>
        </div>

        <ul
          className={`md:flex absolute md:static text-3xl ${
            open ? "top-6" : "-top-48"
          } duration-300 bg-purple-400 pl-4`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
