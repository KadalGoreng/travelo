import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: ReactNode;
  noFooter?: boolean;
};

const Layout = ({ children, noFooter = false }: Props) => {
  return (
    <>
      <Header />
      {children}
      {noFooter ? null : <Footer />}
    </>
  );
};

export default Layout;
