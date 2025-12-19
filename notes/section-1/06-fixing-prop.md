## Fixing Prop

```jsx
<NavBar>
  <Search />
  <NumResults movies={movies} />
</NavBar>;

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
```

So the navbar doesn't need to be filled with props

[Next: Using Composition to make a reusable box](./07-using-composition.md)
