import React, { useState, useEffect, useCallback } from 'react'
import TopNavbar from '../components/TopNavbar'
import Banner from '../components/Banner'
import requests, { API_BASE_URL } from '../requests'
import ContentCarousel from '../components/ContentCarousel'
import {
  useSearchParams,
  useParams,
  useNavigate
} from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import axios from 'axios'
import { debounce } from 'lodash'
import MovieList from '../components/MovieList'

const Home = () => {
  const { id } = useParams()
  const [movies, setMovies] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [searchParams] = useSearchParams()

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    console.log(searchParams.get('query'))
    debounceMovieSearch(searchParams.get('query'))
  }, [searchParams.get('query')])

  const debounceMovieSearch = useCallback(
    debounce((searchQuery) => {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
      .then((response) => {
        console.log(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
        console.log(response.data.results)
        setMovies(response.data.results)
        setTotalResults(response.data)
    })
    }, 500),
  [])
  

  return (
    <div className="bg-black vw-100">
      <TopNavbar />
      {!searchParams.get('query') ? (
        <div>
          <Banner />
          <div className="p-3">
            {Object.values(requests).map((request) => (
              <ContentCarousel apiUrl={API_BASE_URL + request.url} name={request.name} />
            ))}
          </div>
        </div>
      ) : (
        <MovieList movies={movies} query={searchParams.get('query')} totalResults={totalResults}/>
      )}
    </div>
  )
}

export default Home
