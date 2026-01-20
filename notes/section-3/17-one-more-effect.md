# ONE MORE EFFECT: LISTENING TO KEYPRESS

Creating keypress esc for comeback from detail movie

using reguler dom API

```jsx
useEffect(() => {
  function callback(event) {
    if (event.code === `Escape`) {
      onCloseMovie();
    }
  }

  document.addEventListener("keydown", callback);

  // Remove event listener - Clean up.
  return function () {
    document.removeEventListener("keydown", callback);
  };
}, [onCloseMovie]);
```

[Next: Section 4](../section-4/)
