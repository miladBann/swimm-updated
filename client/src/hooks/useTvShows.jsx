import { useState, useEffect } from "react";
import axios from "axios";

function useTvShows(searchInput) {
    const [tvShows, setTvShows] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        const fetchTvShow = async () => {
            try {
                if (searchInput) {
                    setIsSearching(true);
                    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchInput}`);
                    setTvShows(response.data);
                    setIsSearching(false);
                } else {
                    setTvShows([]);
                }
            } catch (error) {
                console.log(error);
                setIsSearching(false);
            }
        };

        const timer = setTimeout(() => {
            fetchTvShow();
        }, 500);

        return () => clearTimeout(timer);
    }, [searchInput]);

    return { tvShows, isSearching };
}

export default useTvShows;
