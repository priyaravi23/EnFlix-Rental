import React from 'react';
import RentalApp from '../images/app.jpg';
import Rentals from '../images/rentals.jpg';
import Movies from '../images/movies.jpg';
import { Link } from 'react-router-dom';
import '../index.css';

const MovieCarousel = () => {
  return (
      <React.Fragment>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={RentalApp} alt="First slide" />

                    <div className="carousel-caption d-none d-md-block">
                        <h2>Rent or Buy</h2>
                        <h5>Movies & TV Series</h5>
                        <Link to='/movies'  className="blue-text ml-1">

                            Browse
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <img className="d-block w-100" src={Rentals} alt="Second slide" />
                </div>

                <div className="carousel-item">
                    <img className="d-block w-100" src={Movies} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
      </React.Fragment>
  )
};

export default MovieCarousel;