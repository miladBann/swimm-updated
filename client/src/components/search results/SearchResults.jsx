import React from "react";
import ShowCard from "../show card/ShowCard";
import useTvShows from "../../hooks/useTvShows";

function SearchResults({ searchInput, favoriteShows, onFavoriteUpdate }) {
    const { tvShows, isSearching } = useTvShows(searchInput);

    return (
        <div>
            {isSearching && <p>Loading...</p>}
            {tvShows.length > 0 ? (
                tvShows.map((show, index) => (
                    <ShowCard 
                        key={index} 
                        show={show} 
                        isFavorited={favoriteShows.some(fav => fav.show.id === show.show.id)} 
                        onFavoriteToggle={() => onFavoriteUpdate(show)} 
                    />
                ))
            ) : (
                !isSearching && <div className="no_results">No results</div>
            )}
        </div>
    );
}

export default SearchResults;
