# USESTATE SUMMARY

## Creating state

**simple:**

```jsx
const [count, setCount] = useState(23);
```

**Based on function (lazy evalution):** only call in initializing render. Funtion must be pure and accept no arguments. called only on initial render

```jsx
const [count, setCount] = useState(() =>
  JSON.parse(localStorage.getItem("count")),
);
```

## Updating state

Make sure to **NOT** mutate object is or arrays, but to replace them

**simple:**

```jsx
setCount(24);
```

**based on current state:** function must e pure and return next state.

```jsx
setCount((current) => current + 1);
```

[Next: How not to select DOM](./06-how-not-to-select-dom.md)
