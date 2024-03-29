const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const API_BASE_URL = `https://api.themoviedb.org/3`;

// Different API requests that can be made from the TMDB API
const requests = {
  fetchTrending: {
    name: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchNetflixOriginals: {
    name: 'Netflix Originals',
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`
  },
  fetchTopRated: {
    name: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMovies: {
    name: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchComedyMovies: {
    name: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
  },
  fetchHorrorMovies: {
    name: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
  },
  fetchRomanceMovies: {
    name: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
  },
  fetchDocumentaries: {
    name: 'Documentaries',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`
  }
};

const movieRequests = {
  fetchPopular: {
    name: 'Popular',
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  },
  fetchLatest: {
    name: 'Latest',
    url: `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`
  },
  fetchTopRated: {
    name: 'Top Rated',
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  },
  fetchUpcoming: {
    name: 'Action',
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  }
};

export default requests;