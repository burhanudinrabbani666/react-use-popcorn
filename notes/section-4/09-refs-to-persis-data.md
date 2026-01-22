# REFS TO PERSIS DATA

```jsx
const countRef = useRef(0);
let count = 0; // this not presist in every re render

useEffect(() => {
  // track every render click
  if (userRating) countRef.current = countRef.current + 1;

  // only take last click
  if (userRating) count + 1;
}, [userRating, count]);
```

[Next: Custom hook](./10-custom-hook.md)
