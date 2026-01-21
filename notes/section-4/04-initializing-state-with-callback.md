# INITIALIZING STATE WITH CALLBACK

We can get data asynchronuslly with callback, so the initial data always get from local storage

```jsx
const [watched, setWatched] = useState(() => {
  const watchedMoviebyLocal = JSON.parse(localStorage.getItem("watched"));

  return watchedMoviebyLocal;
});

useEffect(() => {
  localStorage.setItem("watched", JSON.stringify(watched));
}, [watched]);
// always restore new data when "watched" change
// this more reusable
```

[Next: useState summary](./05-usestate-summary.md)
