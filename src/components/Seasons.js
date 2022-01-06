import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const Seasons = ({ tvShowID, seasons }) => {
  const navigate = useNavigate()
  const [selectedSeason, setSelectedSeason] = useState(1)

  return (
    <div>

      <Dropdown className="fs-6">
        <Dropdown.Toggle variant="transparent text-white d-flex align-items-center gap-1 border-0" id="dropdown-basic" className="p-0 ">
          Season {selectedSeason}
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark" align="end">
          {seasons.map((season) => (
            <Dropdown.Item onClick={() => setSelectedSeason(season.season_number)}>
              Season {season.season_number}
            </Dropdown.Item>
          ))} 
        </Dropdown.Menu>
      </Dropdown>

      <h3 className="">Episodes</h3>

      <img src={`https://image.tmdb.org/t/p/original${seasons[selectedSeason - 1]?.poster_path}`} alt={''} className="moviePoster"/>

      {seasons[selectedSeason - 1].episodes.map((episode) => {
        return (
          <div className="p-3 d-flex align-items-center gap-4 border-bottom border-secondary tvSmallEpisode" onClick={() => navigate(`/title/tv/${tvShowID}/season/${selectedSeason}/episode/${episode.episode_number}`)}>
            <h3>{episode.episode_number}</h3>
            <img src={`https://image.tmdb.org/t/p/original${episode?.still_path}`} alt={''} className="moviePoster"/>

            <div>
              <h4 className="fw-bold">{episode.name}</h4>
              <div>{episode.overview}</div>
            </div>

            {episode?.vote_count > 0 ? (
              <div className="d-flex align-items-center gap-2">
                <div>
                  <i className="bi bi-star-fill fs-3 text-warning"></i>
                </div>
                <div className="">
                  <div className="text-center fs-3">
                    <span>{Math.round((episode?.vote_average + Number.EPSILON) * 100) / 100}</span>
                    <span className="text-secondary">/10</span> 
                  </div>
                  
                  <div className="fs-6 text-secondary text-center">{Number(episode?.vote_count).toLocaleString()}</div>
                </div>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default Seasons
