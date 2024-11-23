import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react'

const usePlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results)
        dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(() => {
        getNowPlayingMovies();
    }, []); // to call the function only once, when the browse page is loaded

}
export default usePlayingMovies;