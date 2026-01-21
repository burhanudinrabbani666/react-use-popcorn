import { useEffect, useRef } from "react";

export function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

export function Search({ query, setQuery }) {
  const inputElement = useRef(null);
  useEffect(() => {
    function callback(event) {
      if (document.activeElement === inputElement.current) return;

      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        inputElement.current.focus();

        setQuery("");
      }
    }

    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback);
  }, [setQuery]);

  // NOT REACT WAY 🫸
  // useEffect(() => {
  //   const searchFieldsElement = document.querySelector(".search");
  //   console.log(searchFieldsElement);
  //   searchFieldsElement.focus();
  // }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies... Ctrl + K"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}

export function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

export function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
