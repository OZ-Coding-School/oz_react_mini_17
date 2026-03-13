import React from 'react'
import MovieCard from './components/MovieCard';
//토큰 불러오기
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

// TMDB 에서 알려준 옵션 설정 / 요청
export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMDB_TOKEN}` //내 토큰 노출로 AI활용
    }
};

// 영화 데이터 가져오는 함수, try catch 구문으로 에러 처리
export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?language=ko-KR&page=1`, options);
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error("데이터 로딩 에러", errorData);
            return [];
        }
        
        const data = await response.json();
        return data.results;      
    } catch (err) {
        console.error("데이터 로딩 에러", err);
        return [];
    }
}
//title로 되어있던 props를 MovieId로 변경
export const getMovieDatail = async (MovieId) => {
    try {
        const response = await fetch(`${BASE_URL}/movie/${MovieId}?language=ko-KR`, options);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("상세 정보 로딩 에러", err);
        return null;        
    }
}




