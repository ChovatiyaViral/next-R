import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import styles from "./header.module.css";

import menu from "./assets/menu.svg";
import close from "./assets/close.svg";

// import { menu, close } from "./assets";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState();

  const menus = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "rarest society",
      link: "/rarest-society",
    },
    {
      title: "rarest whiskies",
      link: "/rarest-whisky",
    },
    {
      title: "rarified experiences",
      link: "/highland-experience",
    },
    {
      title: "global gatherings",
      link: "/elite-global-gathering",
    },
    {
      title: "Accept Invitation",
      link: "/registration",
    },
  ];

  return (
    <div
      className={classnames(
        "flex flex-1 items-start border-b-2 border-[#F3C5B6]",
        styles.menu_bar
      )}
      style={{ height: "66px", background: "#000000" }}
    >
      <div className={styles.logo}>
        <Link href={"/"}>
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={66}
            height={66}
          />
        </Link>
      </div>

      <nav className="right-0 flex flex-1">
        <div className={styles.navbaricon}>
          <div className={styles.menu_icon}>
            <Image
              src={toggle ? close : menu}
              alt="menu image"
              className={classnames(
                "w-[28px] h-[28px] object-contain cursor-pointer"
              )}
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
          <div
            className={classnames(
              styles.nav_bar,
              `${toggle ? "" : "hidden"} absolute top-[3rem] right-0 p-6`
            )}
          >
            <ul className="list-none flex flex-col justify-end items-end">
              {menus.map((nav, index) => (
                <li
                  className={`cursor-pointer ${
                    active === nav.title ? "text-[#1E1E1E]" : "text-[#E8E8E8]"
                  }`}
                  onClick={() => setActive(nav.title)}
                  key={index}
                >
                  <Link href={nav.link}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
