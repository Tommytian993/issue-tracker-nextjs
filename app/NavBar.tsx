"use client"; // we need to use client side navigation because we are using the usePathname hook, which is not available on the server side
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const currentPath = usePathname();
  // 定义导航链接数组，方便后续维护和扩展
  const links = [
    { label: "Dashboard", href: "/" }, // 仪表盘首页
    { label: "Issues", href: "/issues" }, // 问题列表页
  ];
  return (
    // 导航栏容器，使用 flex 布局，底部有边框，设置了间距和高度
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      {/* Logo 区域，点击跳转到首页，这里用 bug 图标作为 logo */}
      <Link href="/">
        <AiFillBug />
      </Link>
      {/* 导航菜单，横向排列，菜单项之间有间距 */}
      <ul className="flex space-x-6">
        {links.map((link) => (
          // 遍历 links 数组，动态渲染每个导航项
          <li key={link.href}>
            {/* 导航链接，点击跳转到对应页面 */}
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
