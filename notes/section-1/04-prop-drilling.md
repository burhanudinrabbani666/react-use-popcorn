## Prop Drilling

```jsx
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} />
    </>
  );
}
```

[Next: Compoenents Composite](./05-component-composite.md)
