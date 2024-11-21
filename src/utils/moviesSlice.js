import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    // slice meta data
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    }, // initially an empty object, will put playing movies in this
    reducers: { 
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload; // put everything that comes into addNowPlayingMovies, into the nowPlayingMovies object
        }
    }
});
export const {addNowPlayingMovies} = moviesSlice.actions; // export actions
export default moviesSlice.reducer;