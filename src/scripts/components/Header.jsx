// src/scripts/components/Header.js
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white py-2 shadow-md" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <a href="#" className="flex items-center">
            <div className="relative">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
                DevArchive
              </span>
              <span className="absolute -top-2 -right-4 rounded-full bg-blue-100 px-1.5 py-0.5 text-xs font-medium text-blue-800">
                Blog
              </span>
            </div>
          </a>

          {/* 네비게이션 (데스크톱) */}
          <nav className="hidden items-center space-x-8 md:flex">
            <a
              href="#"
              className="text-gray-700 transition-colors hover:text-blue-500"
            >
              홈
            </a>
            <a
              href="#"
              className="text-gray-700 transition-colors hover:text-blue-500"
            >
              프론트엔드
            </a>
            <a
              href="#"
              className="text-gray-700 transition-colors hover:text-blue-500"
            >
              백엔드
            </a>
            <a
              href="#"
              className="text-gray-700 transition-colors hover:text-blue-500"
            >
              DevOps
            </a>
            <a
              href="#"
              className="text-gray-700 transition-colors hover:text-blue-500"
            >
              블로그 소개
            </a>
          </nav>

          {/* 검색창 & 버튼 (데스크톱) */}
          <div className="hidden items-center space-x-4 md:flex">
            <div className="relative">
              <input
                type="text"
                placeholder="검색어를 입력하세요..."
                className="w-40 rounded-full bg-gray-100 px-4 py-2 pr-4 pl-10 transition-all focus:w-60 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="flex items-center rounded-md p-2 transition-colors hover:bg-gray-100 md:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "mt-4 max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 py-2">
            <a
              href="#"
              className="block rounded-md px-4 py-2 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-500"
            >
              홈
            </a>
            <a
              href="#"
              className="block rounded-md px-4 py-2 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-500"
            >
              프론트엔드
            </a>
            <a
              href="#"
              className="block rounded-md px-4 py-2 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-500"
            >
              백엔드
            </a>
            <a
              href="#"
              className="block rounded-md px-4 py-2 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-500"
            >
              DevOps
            </a>
            <a
              href="#"
              className="block rounded-md px-4 py-2 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-500"
            >
              블로그 소개
            </a>
            <div className="relative px-4 py-2">
              <input
                type="text"
                placeholder="검색어를 입력하세요..."
                className="w-full rounded-full bg-gray-100 px-4 py-2 pl-10 transition-all focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-7 h-5 w-5 -translate-y-1/2 transform text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
