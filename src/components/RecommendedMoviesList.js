import React, { useState } from 'react';
import SmallMovie from '../components/SmallMovie';

/**
 * @description - 
 * @returns {React.FC}
 */
const RecommendedMoviesList = ({ recommendedMovies }) => {
  const [hoveredValue, setHoveredValue] = useState(null);

  return (
    recommendedMovies.results.length >= 1 ?
      (
        <div className="py-3">
          <div className="fs-4">More Like This</div>

          <div className="smallMoviesGrid">
            {recommendedMovies.results.map((movie) => {
              return (
                <div className="" key={movie.id}>
                  <SmallMovie movie={movie} hoveredValue={hoveredValue} setHoveredValue={setHoveredValue} />
                </div>
              );
            })}
          </div>
        </div>
      ) : null
  );
};

export default RecommendedMoviesList;
