#### Features
    - Login/Signup
    - browse (post-auth)
        -header
        - movie
            - background playback
            - titles & desc
            - suggestions
    - gpt recommendations


#### Structure
    - header
    - routing
    - login/signup form
        - form validation (regex)
    - browse page
        - tmdb data fetch on browse page
        - display data in cards on browse page (background play)
        - put movie data in redux store
            - create new hook for modularity
                - create "movies" slice
                - dispatch an action to add json data from tmdb api to slice
        - video playback + video title + video desc
        - video recommendations as cards


#### devEnv
    - create react app
    - tailwindCSS
    - firebase
    - redux-store
    - @reduxjs/toolkit
    - useRef, useDispatch, useNavigation hook(s)

