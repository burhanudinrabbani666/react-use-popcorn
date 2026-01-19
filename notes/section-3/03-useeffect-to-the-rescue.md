# USEEFFECT TO THE RESCUE

The idea of useEffect hooks is make sure shere we can safely write side effect.

```jsx
useEffect(() => {
  fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=harry potter`)
    .then((res) => res.json())
    .then((data) => setMovies(data.Search));
}, []);
```

[Next: A first look at effect](./04-a-first-look-at-effect.md)
