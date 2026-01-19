# HOW NOT TO FECTH DATA IN REACT

Do not fetch data like this in react for setState. this make infinite loop. using useffect ❗

```jsx
fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=harry potter`)
  .then((res) => res.json())
  .then((data) => setMovies(data.Search)); // this
```

[Next: useEffect to the rescue](./03-useeffect-to-the-rescue.md)
