import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_URL } from './MovieCard';
import { getMovieDatail } from '../API';

export default function MovieDetail() {
  const { movieId } = useParams();
  const [ movie, setMovie ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  
  useEffect(() => {
    const fetchDatail = async () => {
        setLoading(true);
        const data = await getMovieDatail(movieId);
        setMovie(data);
        setLoading(false);
    }
    fetchDatail();
  }, [movieId]);

  if (loading) {
    return <div className='p-8 min-h-screen'>영화 제목: {movieId} - 데이터를 불러오는 중입니다.</div>;
  }
  if (!movie) {
    return <div className='p-8 min-h-screen'>영화 제목: {movieId} - 상세 정보를 불러오는 중이거나 데이터가 없습니다.</div>;
  }
    
  return (
    // 전체
        <div className='flex justify-center p-5 md:p-10 min-h-screen'>
            {/* 컨테이너 배치 */}
            <div className='flex flex-row gap-8 md:gap-12 max-w-5xl w-full items-start'>
                {/* 포스터 영역 */}
                <div className='w-[200px] sm:w-[300px] md:w-[400] flex-shrink:0'>
                    <img
                    className='w-full rounded-xl shadow-2xl'
                    src={IMG_URL + movie.poster_path}
                    alt={movie.title}/>
                </div>
                {/* 오른쪽 묶음 */}
                <div className='flex-1 flex flex-col gap-6'>
                    {/* 제목과 평점 */}
                    <div className='border-b  pd-4 flex justify-between pd-4 items-end'>
                        <h1 className='text-2xl sm:text-3xl md:text-5xl font-extrabold'>
                            {movie.title}
                        </h1>
                        <span className='text-lg sm:text-xl font-bold whitespace-nowrap ml-4'>
                            평점 : {movie.vote_average.toFixed(1)}
                        </span>
                    </div>
                    {/* 장르 정보 */}
                    <div className='flex flex-wrap gap-2'> 
                        {movie.genres.map((genre) => (
                            <span 
                                key={genre.id} 
                                className='px-4 py-1.5 bg-gray-400 text-white text-sm font-bold rounded-full border border-gray-700 shadow-sm'
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>
                    {/* 기존 장르 정보 */}
                    {/* <div className='inlime-flex text-center'>
                        <span className='px-4 py-1.5 rounded-full text-sm font-medium text-center'>
                            {movie.genres.map(genre => genre.name).join(', ')}
                        </span>
                    </div> */}
                    
                    {/* 줄거리 정보 */}
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-xl sm:text-2xl font-bold'>
                            줄거리
                        </h2>
                        <p className='leading-relaxed text-base sm:text-lg'>
                            {movie.overview ? movie.overview : "내용이 없습니다."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}
