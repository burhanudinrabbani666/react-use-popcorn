# SELECTING MOVIE

```jsx
const [selectedId, setSelectedId] = useState(null);

function handleSelectedMovie(id) {
  setSelectedId((selectedId) => (id === selectedId ? null : id));
}

function handleCloseMovie() {
  setSelectedId(null);
}

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          onSelectedMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}

function MovieDetails({ selectedId, onCloseMovie }) {
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
}
```

[Next: Loading Movie Detail](./11-loading-movie-details.md)
