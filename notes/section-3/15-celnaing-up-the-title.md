# CLEANING UP TITLE

```jsx
useEffect(() => {
  if (!title) return;
  document.title = `Movie | ${title}`;

  // Returning clean-up
  return function () {
    document.title = `🍿 usePopcorn`;
  };
}, [title]);
```

[Next: Cleaning up data featching](./16-cleaning-up-data-featching.md)
