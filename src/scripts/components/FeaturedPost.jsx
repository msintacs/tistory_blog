// src/scripts/components/FeaturedPost.js
import React from "react";

const FeaturedPost = () => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>

      <img
        src="/api/placeholder/1200/600"
        alt="Featured post"
        className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute right-0 bottom-0 left-0 z-20 transform p-6 transition-transform duration-300 group-hover:translate-y-0">
        <div className="mb-3 flex items-center">
          <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
            프론트엔드
          </span>
          <span className="ml-3 text-sm text-gray-200">2025년 4월 2일</span>
        </div>

        <h2 className="mb-3 text-3xl font-bold text-white">
          Next.js 14의 새로운 기능과 성능 향상 전략
        </h2>

        <p className="mb-4 max-w-3xl text-gray-200">
          Next.js 14가 출시되면서 개발자들에게 제공되는 새로운 기능과 성능
          최적화 방법을 자세히 살펴봅니다. 서버 컴포넌트, 스트리밍, 새로운
          번들러 등을 통해 어떻게 더 빠른 웹 애플리케이션을 구축할 수 있는지
          알아보세요.
        </p>

        <div className="flex items-center">
          <img
            src="/api/placeholder/100/100"
            alt="Author"
            className="h-10 w-10 rounded-full border-2 border-white"
          />
          <div className="ml-3">
            <span className="block text-sm font-medium text-white">
              작성자: 김개발
            </span>
            <span className="text-xs text-gray-300">풀스택 개발자</span>
          </div>

          <a
            href="#"
            className="group ml-auto inline-flex items-center rounded-lg bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <span>자세히 보기</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* 상단 장식 요소 */}
      <div className="absolute top-4 right-4 flex items-center rounded-full bg-white/30 px-3 py-1 backdrop-blur-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
        <span className="ml-1 text-xs font-medium text-white">추천 포스트</span>
      </div>
    </div>
  );
};

export default FeaturedPost;
