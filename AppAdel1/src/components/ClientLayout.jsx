"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const ClientLayout = ({ children }) => {
  const pathName = usePathname();
  const showHeader = pathName !== '/' && pathName !== '/register'

  console.log('showHeader', showHeader)

  return (
    <>
      {showHeader && <Header />}
      <main>{children}</main>
    </>
  );
};

export default ClientLayout;
