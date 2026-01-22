import { useState, useEffect } from "react";

export function useLocalStorage(initialState, key) {
  // make more flexiable with not static name; watched =to=> value
  const [value, setValue] = useState(() => {
    const watchedMoviebyLocal = JSON.parse(localStorage.getItem(key));

    return watchedMoviebyLocal ? watchedMoviebyLocal : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
