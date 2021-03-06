import React, { useEffect } from 'react';
import './styles.css'
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice'
import Profile from './pages/Profile';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import Movies from './pages/browse/Movies'
import TVShows from './pages/browse/TVShows'
import Movie from './pages/Movie'
import TVShow from './pages/TVShow'
import TVEpisode from './pages/TVEpisode'


const App = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      console.log(userAuth)
      if (userAuth) {
        // Logged in
        console.log(userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // Logged out
        dispatch(logout)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className="bg-black text-white vw-100 vh-100 mw-100">    
          
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/title/movie/:id" element={<Movie />} exact/>
        <Route path="/title/tv/:id" element={<TVShow />} exact/>
        <Route path="/title/tv/:id/season/:seasonNum/episode/:episodeNum" element={<TVEpisode />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
