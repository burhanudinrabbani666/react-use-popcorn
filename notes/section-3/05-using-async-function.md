# USING ASYNC FUNCTION

Change fetch handling to async function

```jsx
// cannot directly using async in here
useEffect(function () {
  async function fetchMovies() {
    // But in here
    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

    const data = await res.json();
    setMovies(() => data.Search);
    console.log(data.Search);
  }

  fetchMovies(); // Initial function
}, []);
```

[Next: adding loading state](./06-adding-loading-state.md)
