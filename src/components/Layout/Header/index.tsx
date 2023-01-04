import Image from "next/image";
import React from "react";

import travelLogo from "public/assets/travelo-logo-header.png";
import Container from "components/Container";
import Search from "./Search";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-[85px] bg-white shadow-lg p-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex">
            <Image
              src={travelLogo}
              alt="Travel logo"
              placeholder="blur"
              height="48"
              width="182"
            />
            <Search />
          </div>

          <div className="flex gap-5">
            <Nav />
            <Link href="/login">
              <a className="bg-blue-100 text-white p-3 w-[190px] h-[45px] text-heading-4 font-label font-bold rounded-md flex justify-center items-center">Masuk</a>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
