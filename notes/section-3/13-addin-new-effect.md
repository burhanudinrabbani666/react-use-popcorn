# ADDING NEW EFFECT FOR TITLE

change title for every movie

```jsx
useEffect(() => {
  if (!title) return;
  document.title = `Movie | ${title}`; // change title
}, [title]);
```

[Next: useEffect cleanup function](./14-the-useeffect-cleanup-function.md)
