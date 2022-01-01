import React, { useState } from 'react'
import SmallMovie from './SmallMovie'

const MovieList = ({ movies, query, totalResults }) => {
  const [hoveredValue, setHoveredValue] = useState(null)

  console.log(totalResults)
  return (
    <div className="pt-5 text-white">
      <div className="px-5 py-3 fw-bold fs-4 flex align-items-center">{query} ({totalResults.total_results})</div>
      <div className="d-flex justify-content-between flex-wrap rounded px-5">
        {movies.map((movie) => {
          return <SmallMovie movie={movie} hoveredValue={hoveredValue} setHoveredValue={setHoveredValue}/>
        })}
      </div>
    </div>
  )
}

export default MovieList