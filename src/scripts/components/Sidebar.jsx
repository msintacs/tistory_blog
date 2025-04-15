// src/scripts/components/Sidebar.js
import React from "react";

const Sidebar = () => {
  // 인기 포스트 목록 (실제로는 API 호출 등으로 가져올 수 있음)
  const popularPosts = [
    {
      id: 1,
      title: "React 18의 새로운 기능과 주요 업데이트",
      date: "2025년 3월 15일",
      views: 1243,
    },
    {
      id: 2,
      title: "클린 코드의 7가지 원칙과 실제 적용 방법",
      date: "2025년 3월 10일",
      views: 985,
    },
    {
      id: 3,
      title: "Next.js와 React Query로 데이터 페칭 최적화하기",
      date: "2025년 3월 5일",
      views: 842,
    },
    {
      id: 4,
      title: "프론트엔드 개발자를 위한 성능 최적화 가이드",
      date: "2025년 2월 28일",
      views: 756,
    },
  ];

  // 태그 목록
  const tags = [
    { name: "React", count: 24 },
    { name: "JavaScript", count: 42 },
    { name: "TypeScript", count: 18 },
    { name: "Next.js", count: 15 },
    { name: "CSS", count: 29 },
    { name: "Tailwind", count: 13 },
    { name: "Node.js", count: 22 },
    { name: "AWS", count: 9 },
    { name: "Docker", count: 11 },
    { name: "Git", count: 16 },
    { name: "CI/CD", count: 7 },
    { name: "Testing", count: 14 },
  ];

  return (
    <aside className="sticky top-24 space-y-8">
      {/* 검색창 */}
      <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-gray-800">검색</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="검색어를 입력하세요..."
            className="w-full rounded-lg border border-gray-200 px-4 py-2 pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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

      {/* 광고 배너 */}
      <div className="overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm">
        <div className="p-6">
          <p className="mb-1 text-xs font-medium">스폰서</p>
          <h3 className="mb-2 text-xl font-bold">
            개발자를 위한 클라우드 솔루션
          </h3>
          <p className="mb-4 text-sm opacity-90">
            초기 비용 없이 시작하는 클라우드 호스팅, 첫 3개월 무료
          </p>
          <a
            href="#"
            className="hover:bg-opacity-90 inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 transition-colors"
          >
            지금 시작하기
          </a>
        </div>
        <div className="h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
      </div>

      {/* 인기 포스트 */}
      <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-gray-800">인기 포스트</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <div
              key={post.id}
              className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
            >
              <a href="#" className="group block">
                <h4 className="line-clamp-2 font-medium text-gray-800 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h4>
                <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                  <span>{post.date}</span>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    <span>{post.views}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 태그 클라우드 */}
      <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-gray-800">태그</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <a
              key={tag.name}
              href="#"
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-blue-100 hover:text-blue-700"
            >
              {tag.name}{" "}
              <span className="text-xs text-gray-500">({tag.count})</span>
            </a>
          ))}
        </div>
      </div>

      {/* 뉴스레터 간략 구독 폼 */}
      <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 shadow-sm">
        <h3 className="mb-2 text-lg font-bold text-gray-800">뉴스레터 구독</h3>
        <p className="mb-3 text-sm text-gray-600">
          최신 개발 트렌드와 팁을 받아보세요.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="이메일 주소"
            className="flex-grow rounded-l-lg border border-gray-200 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="button"
            className="rounded-r-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            구독
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
