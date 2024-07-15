import React, { useState, useEffect } from "react";
import SearchBar from "../components/search bar/SearchBar";
import SearchResults from "../components/search results/SearchResults";
import FavoriteShows from "../components/favorite show/FavoriteShows";

function MainPage() {
    const [searchText, setSearchText] = useState("");
    const [favoriteShows, setFavoriteShows] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteShows(savedFavorites);
    }, []);

    const updateFavorites = (show) => {
        let favorites = [...favoriteShows];
        const isFavorited = favorites.some(fav => fav.show.id === show.show.id);

        if (isFavorited) {
            favorites = favorites.filter(fav => fav.show.id !== show.show.id);
        } else {
            favorites.push(show);
        }

        setFavoriteShows(favorites);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    return (
        <div className="row">
            <div className="top_row">
                <p className="title">The TV Series Database</p>
                <SearchBar setSearch={setSearchText} />
            </div>

            <div className="mid_row">
                <div>
                    <p className="header">Search Results</p>
                    <SearchResults searchInput={searchText} favoriteShows={favoriteShows} onFavoriteUpdate={updateFavorites} />
                </div>

                <div>
                    <p className="header">My Favorites</p>
                    <FavoriteShows favorites={favoriteShows} onFavoriteUpdate={updateFavorites} />
                </div>
            </div>
        </div>
    );
}

export default MainPage;
