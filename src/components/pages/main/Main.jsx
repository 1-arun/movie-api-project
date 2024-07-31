import React from "react";
import { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Tooltip from "../../reusable/Tooltip/Tooltip";
import "./main.css";
import apiCall from "../../apiCall/apiCall";

const Main = () => {
  const [value, setValue] = useState("");
  const [getMoviesData, setGetMoviesData] = useState([]);

  const getAllMoviesAPI = async () => {
    try {
      const result = await apiCall("GET", "movie");
      setGetMoviesData(result.results);
      console.log(result, "resulte data");
    } catch (error) {
      console.log("error aarha rahai ");
    } finally {
      // setShowLoader(false);
      console.log("ok bhai finnaly");
    }
  };
  useEffect(() => {
    getAllMoviesAPI();
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <div className="main">
      {/* search bar */}
      <SearchComponent setValue={setValue} handleChange={handleChange} />
      {/* Movie card container ----- */}

      {/* <div className="movie-card-container">
        <div className="card">
          <img src="" alt="" />
          <h3>Mirzapur</h3>
          <p>Release year : 2024</p>
          <div>add to fav :</div>
          <div className="heart">
            <FavoriteBorderIcon />
          </div>
          
        </div>
      </div> */}
      <div className="card-container flex-center">
        {getMoviesData?.map((data, idx) => {
          return (
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                alt="movie-poster"
                className="movie-poster"
              />
              <div className="movie-details">
                <h4>{data?.original_title}</h4>
                <div>
                  <h5 className="release-year">
                    Release Year : {data?.release_date}
                  </h5>
                  <div className="flex-between">
                    <p className="rating flex-between">
                      <span> {data?.vote_average}</span>
                      <StarBorderPurple500Icon
                        sx={{ width: "14px", color: "white" }}
                      />
                    </p>
                    <Tooltip text="Add to favourites">
                      <FavoriteBorderIcon />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
