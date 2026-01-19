# ADDING LOADING STATE

create loading component to make featch data look naturally in UI.

```jsx
const [isLoading, setIsLoading] = useState(false);

useEffect(function () {
  async function fetchMovies() {
    setIsLoading(true);

    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

    const data = await res.json();
    setMovies(() => data.Search);
    console.log(data.Search);
    setIsLoading(false);
  }

  fetchMovies();
}, []);
```

```jsx
// render in UI
return (
  <>
    <NavBar>
      <Search />
      <NumResults movies={movies} />
    </NavBar>
    <Main>
      {/* this is */}
      <Box>{isLoading ? <Loader /> : <MovieList movies={movies} />}</Box>
      <Box>
        <WatchSummary watched={watched} />
        <WatchedMovieList watched={watched} />
      </Box>
    </Main>
  </>
);
```

[Next: Handling error ](./07-handling-error.md)
