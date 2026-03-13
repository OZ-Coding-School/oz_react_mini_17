import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    // siicky CSS로 상단바 고정
    <nav className='sticky top-0 z-50 bg-white flex items-center justify-between px-6 py-4 shadow-md border-b'>
        {/* 로고영역 */}
        <div className='logo flex-shrink:0'>
            <Link to="/" className='flex'>
                <img src="data:image/png;base64,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"
                alt="홈으로"
                className='h-8 w-auto object-contain scale-200'
                />
            </Link>
        </div>

        {/* 검색창영역 */}
        <div className='search flex-1 max-w-2xl ms-10'>
            <div className='relative'>
                <input
                type="text"
                placeholder="영화 제목을 입력하세요"
                className='w-full bg-[#3f3f3f] text-white px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all'
                />
            </div>
        </div>

        {/* 로그인영역 */}
        <div className='login flex items-center gap-3 font-semibold text-sm ml-6'>
            <button className='border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-red-500 font-bold py-2 px-4 rounded-md transition-all'>로그인</button>
            <button className='border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-red-500 font-bold py-2 px-4 rounded-md transition-all'>회원가입</button>
        </div>
    </nav>
  )
}
