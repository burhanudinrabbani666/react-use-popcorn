# CUSTOM HOOK

**Reusing** logic with custom hook:

- 👉 Allow us to reuse non-visual logic in multiple components
- 👉 One custom hook should have one purpose, to make it reusable and portable (even across multiple projects)
- 👉 Rules of hooks apply to custom hooks too

```jsx
// Function name start with use
function useFetch(url) {
  // Need start with one or more react hooks
  const [data, setData] = useState([]); // 1.
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 2.
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data, isLoading]; // Unlike componenets, can receive and return any relevant data (usually [] or {})
}
```

[Next: Creating custom hook](./11-creating-custom-hook.md)
