import React from 'react'
import { useNavigate } from 'react-router-dom'

export const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export default function MovieCard(props) {
  const navigate = useNavigate()
  
  const onClickMovie = () => {
    navigate(`/movie/${props.id}`, {state: props})
  }
   
  return (
    <div className=
    'bg-white reunded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col'
    onClick={onClickMovie}>
        <img
          className='w-full h-full object-cover'
          src={IMG_URL + props.poster_path}
          alt={props.title}
        />
        <div className='p-3 flex flex-col gap-1'>
            <h4 className='font-bold text-sm truncate'>{props.title}</h4>
            <span className='text-xs text-gray-500'>평점 : {props.vote_average}</span>
        </div>

    </div>
  )
}
