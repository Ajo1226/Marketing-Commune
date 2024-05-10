import React from "react";
import "./styles/Footer.css";
export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <footer
      style={{ width: "95vw" }}
      className="mt-6 px-3 py-8 text-gray-500 transition-colors rounded-2xl duration-200 bg-gray-300 dark:bg-gray-800 text-2 dark:text-gray-200">
      <div className="flex flex-col">
        <div className="flex flex-col mt-4 md:mt-0 md:flex-row">
          <nav className="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:pr-5">
            <span>Product Marketing</span>
          </nav>

          <div className="flex items-center justify-center flex mt-4 border-gray-100 md:mt-0 ">
            <a
              className="hover:text-primary-gray-20"
              href="https://communeai.org/">
              <img className="w-10 h-10" src="/footerlogo.webp" alt="Workflow" />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 mt-4 md:mt-0 md:items-start md:pl-5">
            <span className="">© 2024 Commune AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
