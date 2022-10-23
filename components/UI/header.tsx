import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { BiMenu } from "react-icons/bi";
import styles from "./header.module.css";

const Header = () => {
  // state for showing and hiding the header
  const [show, setShow] = useState(false);

  return (
    <header className="w-full h-[10vh] text-base md:text-lg top-0 px-10 flex justify-between items-center text-secondary font-semibold overflow-y-hidden bg-primary z-10 relative">
      {/* logo */}
      <Image
        src={Logo}
        alt="Logo"
        width={150}
        height={150}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      {/* links */}

      <ul
        className={`py-10 flex flex-col justify-around items-center w-full gap-10 h-[90vh] right-0 fixed top-[10vh] z-2 ${
          show ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-in-out bg-secondary text-primary md:flex-row md:static md:gap-10 md:translate-x-0 md:h-auto md:w-auto md:bg-primary md:text-secondary`}
      >
        <li className="w-full ">
          <Link href="/customer/Home">
            <a className="h-20 flex justify-center items-center hover:bg-primary hover:text-secondary transition-all duration-500 ease-in-out">
              <p className={`${styles.link}  w-auto text-center w-24 mx-auto `}>
                Home
              </p>
            </a>
          </Link>
        </li>
        <li className="w-full ">
          <Link href="">
            <a className="h-20 flex justify-center items-center hover:bg-primary hover:text-secondary transition-all duration-500 ease-in-out">
              <p className={`${styles.link}  w-auto text-center w-24 mx-auto `}>
                Store
              </p>
            </a>
          </Link>
        </li>
        <li className="w-full ">
          <Link href="">
            <a className="h-20 flex justify-center items-center hover:bg-primary hover:text-secondary transition-all duration-500 ease-in-out">
              <p className={`${styles.link}  w-auto text-center w-24 mx-auto `}>
                About
              </p>
            </a>
          </Link>
        </li>
        <li className="w-full ">
          <Link href="">
            <a className="h-20 flex justify-center items-center hover:bg-primary hover:text-secondary transition-all duration-500 ease-in-out">
              <p className={`${styles.link}  w-auto text-center w-24 mx-auto `}>
                Contact
              </p>
            </a>
          </Link>
        </li>
        <li className="w-full ">
          <Link href="">
            <a className="h-20 flex justify-center items-center hover:bg-primary hover:text-secondary transition-all duration-500 ease-in-out">
              <p className={`${styles.link}  w-auto text-center w-24 mx-auto`}>
                Blogs
              </p>
            </a>
          </Link>
        </li>
      </ul>

      {/** Burger menu*/}
      <div className={`cursor-pointer md:hidden`}>
        <BiMenu
          onClick={() => {
            setShow(!show);
            console.log(show);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
