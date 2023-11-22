import React, {useEffect, useState} from "react"
import "./movie.css"
import { useParams } from "react-router-dom"

const Movie = () => {

   
    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src="data:image/jpeg;base64,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"/>
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src="data:image/jpeg;base64,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" />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name"></div>
                        <div className="movie__tagline"></div>
                        <div className="movie__rating">
                           <i class="fas fa-star" />
                            <span className="movie__voteCount"></span>
                        </div>  
                        <div className="movie__runtime"></div>
                        <div className="movie__releaseDate"></div>
                        <div className="movie__genres">
                            
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div></div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
               
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">

                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src="" />
                                    <span></span>
                                </span>
                            
                      
                   
            </div>
        </div>
    )
}

export default Movie;