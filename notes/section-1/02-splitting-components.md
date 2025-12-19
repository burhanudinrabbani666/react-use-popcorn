## Spliting Component in Practice

```jsx
export default function App() {
  return (
    <>
      <NavBar />
      <Main />
    </>
  );
}

function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}

function Main() {
  return (
    <main className="main">
      <ListBox />
      <WatchBox />
    </main>
  );
}
```

make components more logical smaller

[Next: Components Category](./03-components-category.md)
