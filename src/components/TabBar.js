"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsStarFill, BsNewspaper, BsGlobeAmericas, BsSearch } from "react-icons/bs";
import styles from "./TabBar.module.css";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className={styles.navbar}>
      <NavItem icon={<BsStarFill size={20}/>} path="/" currentPath={pathname}>Featured</NavItem>
      <NavItem icon={<BsNewspaper size={20}/>} path="/news" currentPath={pathname}>News</NavItem>
      <NavItem icon={<BsGlobeAmericas size={20}/>} path="/sources" currentPath={pathname}>Sources</NavItem>
      <NavItem icon={<BsSearch size={20}/>} path="/search" currentPath={pathname}>Search</NavItem>
    </nav>
  );
}

function NavItem({ icon, path, currentPath, children }) {
  const isActive = currentPath === path;
  return (
    <Link href={path} className={`${styles.navbarItem} ${isActive ? styles.active : styles.inactive}`}>
      {icon}
      <span>{children}</span>
    </Link>
  );
}