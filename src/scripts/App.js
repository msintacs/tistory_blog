// src/scripts/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import FeaturedPost from "./components/FeaturedPost";
import Newsletter from "./components/Newsletter";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 페이지 로드 애니메이션을 위한 상태 설정
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <div
      className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <Header />

      <main className="container mx-auto px-4 py-8 transition-all duration-300 ease-in-out lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* 메인 콘텐츠 영역 */}
          <div className="lg:w-2/3">
            {/* 특성 포스트 */}
            <section
              className="animate-fade-in-up mb-12 opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <FeaturedPost />
            </section>

            {/* 최근 포스트 목록 */}
            <section className="mb-12">
              <h2 className="mb-6 border-b pb-2 text-2xl font-bold text-gray-800">
                최근 포스트
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up opacity-0"
                    style={{
                      animationDelay: `${0.3 + index * 0.1}s`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <PostCard
                      title={`포스트 타이틀 ${index}`}
                      excerpt="이 포스트는 React와 Next.js에 대한 심층적인 분석을 제공합니다. 프론트엔드 개발의 최신 트렌드와 함께 살펴봅니다."
                      date="2025년 4월 1일"
                      category="프론트엔드"
                      imageUrl="/api/placeholder/800/500"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* 뉴스레터 가입 섹션 */}
            <section
              className="animate-fade-in-up mb-12 opacity-0"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              <Newsletter />
            </section>
          </div>

          {/* 사이드바 */}
          <div
            className="animate-fade-in-up opacity-0 lg:w-1/3"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
