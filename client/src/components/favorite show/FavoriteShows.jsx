import React from "react";
import ShowCard from "../show card/ShowCard";

function FavoriteShows({ favorites, onFavoriteUpdate }) {
    return (
        <div>
            {favorites.length > 0 ? (
                favorites.map((show, index) => (
                    <ShowCard 
                        key={index} 
                        show={show} 
                        isFavorited={true} 
                        onFavoriteToggle={() => onFavoriteUpdate(show)} 
                    />
                ))
            ) : (
                <p>No favorite shows added yet.</p>
            )}
        </div>
    );
}

export default FavoriteShows;
