# HANDLING ERROR

We need handling a lot of error situation, example: No connection and in this case movie didnt exist

```jsx
useEffect(function () {
  async function fetchMovies() {
    try {
      setIsLoading(true);

      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
      );

      // Checking for internet connection
      if (!res.ok) throw new Error("something wrong from fetching movies");

      const data = await res.json();

      // Checking if movie is exist
      if (data.Response === "False") throw new Error("movie not found");

      setMovies(() => data.Search);
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  fetchMovies();
}, []);
```

returning in UI

```jsx
<Main>
  <Box>
    {isLoading && <Loader />}
    {!isLoading && !error && <MovieList movies={movies} />}
    {error && <ErrorMessage message={error} />}
  </Box>
  <Box>
    <WatchSummary watched={watched} />
    <WatchedMovieList watched={watched} />
  </Box>
</Main>
```

[Next: the use effects dependecy array](./08-the-use-effects-dependecy-array.md)
