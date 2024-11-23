import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({movieID}) => {
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/912649/videos", API_OPTIONS);
        const json = await data.json();
        console.log(json)
    };
    useEffect(() =>{
        getMovieVideos();
    }, []);

  return (
    <div>

    </div>
  )
}

export default VideoBackground