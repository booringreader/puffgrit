import usePlayingMovies from '../hooks/usePlayingMovies'
import Header from './Header'

const Browse = () => {
  usePlayingMovies();
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse