import { useState, useEffect } from "react";
import { KEY } from "../config/config";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // callback?.();

    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal },
        );

        // Checking for internet connection
        if (!res.ok) throw new Error("something wrong from fetching movies");

        const data = await res.json();

        // Checking if movie is exist
        if (data.Response === "False") throw new Error("movie not found");

        setMovies(() => data.Search);
        setError("");
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error.message);
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, error, isLoading };
}
