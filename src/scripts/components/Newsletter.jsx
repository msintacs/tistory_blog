// src/scripts/components/Newsletter.js
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
      return;
    }

    // 실제 구현에서는 이 부분에서 API 호출을 통해 뉴스레터 구독 처리
    console.log("뉴스레터 구독:", email);
    setIsSubmitted(true);
    setEmail("");

    // 성공 메시지 3초 후 사라지게
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
      {/* 장식 요소들 */}
      <div className="absolute top-0 right-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 opacity-70"></div>
      <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-100 opacity-60"></div>
      <div className="absolute top-1/4 left-1/4 h-12 w-12 rounded-full bg-pink-100 opacity-60"></div>

      <div className="relative z-10">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mr-6 md:mb-0">
            <h3 className="mb-2 text-2xl font-bold text-gray-800">
              개발 인사이트를 받아보세요
            </h3>
            <p className="max-w-md text-gray-600">
              최신 개발 트렌드, 팁, 튜토리얼을 격주로 받아보세요. 광고 없이
              유용한 정보만 보내드립니다.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소를 입력하세요"
                  className={`w-full rounded-lg px-4 py-3 focus:ring-2 focus:outline-none ${
                    isError
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:ring-blue-500"
                  }`}
                  required
                />
                {isError && (
                  <p className="absolute mt-1 text-xs text-red-500">
                    유효한 이메일 주소를 입력해주세요.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                구독하기
              </button>
            </form>

            <p className="mt-3 text-xs text-gray-500">
              구독은 언제든지 취소할 수 있습니다. 개인정보는 안전하게
              보호됩니다.
            </p>
          </div>
        </div>

        {/* 성공 메시지 */}
        {isSubmitted && (
          <div className="animate-slide-up absolute -bottom-12 left-1/2 -translate-x-1/2 transform rounded-lg bg-green-100 px-4 py-2 whitespace-nowrap text-green-700 shadow-sm">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>구독 신청이 완료되었습니다!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
