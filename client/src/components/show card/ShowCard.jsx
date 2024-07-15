import React from "react";
import "./show-card.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

function ShowCard({ show, isFavorited, onFavoriteToggle }) {
    return (
        <div className="card">
            <div>
                <figure>
                    {show.show.image ? (
                        <img src={show.show.image.medium} alt={show.show.name} />
                    ) : (
                        <div>No image</div>
                    )}
                </figure>
            </div>

            <div className="card_right_Side">
                <div className="show_info">
                    <div>
                        <p className="show_title">{show.show.name}</p>
                        <p className="rating">
                            {show.show.rating && show.show.rating.average ? show.show.rating.average : "No rating available"}
                        </p>
                    </div>
                    <p className="category">
                        {show.show.genres.length > 0 ? show.show.genres.join(" | ") : "No genres available"}
                    </p>
                </div>

                <div onClick={onFavoriteToggle}>
                    {isFavorited ? (
                        <MdFavorite className="fav_icon" style={{ color: "red" }} />
                    ) : (
                        <MdFavoriteBorder className="fav_icon" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ShowCard;
