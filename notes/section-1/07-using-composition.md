## Making Reusable box

components that were previously separate are combined because they have the same logic

```jsx
<Main>
  <Box>
    <MovieList movies={movies} />
  </Box>
  <Box>
    <WatchSummary watched={watched} />
    <WatchedMovieList watched={watched} />
  </Box>
</Main>
```

[Next Passing Element](./08-passing-elements.md)
