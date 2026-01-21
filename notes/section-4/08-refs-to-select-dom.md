# REFS TO SELECTING DOM

Selecting DOM for making shortcut to input. Using **useRef.**

```jsx
export function Search({ query, setQuery }) {
  const inputElement = useRef(null);

  useEffect(() => {
    function callback(event) {
      if (document.activeElement === inputElement.current) return;

      // Soon when user CTRL + K, not Enter key like in tutorial
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        inputElement.current.focus();

        setQuery("");
      }
    }

    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback);
  }, [setQuery]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies... Ctrl + K"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement} // Connecting ref
    />
  );
}
```

[Next: Refs to persis data](./09-refs-to-persis-data.md)
