# SYNCHRONIZING QUERY

```jsx
const [query, setQuery] = useState("naruto");

useEffect(
  function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
        );

        // Checking for internet connection
        if (!res.ok) throw new Error("something wrong from fetching movies");

        const data = await res.json();

        // Checking if movie is exist
        if (data.Response === "False") throw new Error("movie not found");

        setMovies(() => data.Search);
      } catch (error) {
        setError(error.message);
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
  },
  [query],
);
```

the useEffect alaways triggered when query change, or in UI when where typing something in input fields

```jsx
function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
```

[Next: Loading movie detailsP](./11-loading-movie-details.md)
