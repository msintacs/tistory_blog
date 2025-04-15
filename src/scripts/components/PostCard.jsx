// src/scripts/components/PostCard.js
import React, { useState } from "react";

const PostCard = ({ title, excerpt, date, category, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="h-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className={`h-48 w-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <span className="absolute top-3 left-3 rounded-full bg-blue-500 px-2.5 py-1 text-xs font-medium text-white">
          {category}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs text-gray-500">{date}</span>
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
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
            <span className="text-xs text-gray-500">232</span>
          </div>
        </div>

        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-800 transition-colors hover:text-blue-600">
          <a href="#">{title}</a>
        </h3>

        <p className="mb-4 line-clamp-3 text-sm text-gray-600">{excerpt}</p>

        <div className="flex items-center justify-between">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            <span>더 읽기</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-1 h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          <button className="text-gray-400 transition-colors hover:text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
