"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    path: "/",
    route: "home",
  },
  {
    path: "/page1",
    route: "page1",
  },
  {
    path: "/page2",
    route: "page2",
  },
];
export const FramerMotionNavBar = () => {
  const path = usePathname();

  return (
    <nav className={`flex gap-2`}>
      {routes.map((r) => (
        <motion.button className={twMerge()} key={r.path} layoutId={`link`}>
          <Link href={r.path}>{r.route}</Link>
        </motion.button>
      ))}
    </nav>
  );
};
