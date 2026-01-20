# CLEANING UP DATA FEATCHING

The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.

You can create a new AbortController object using the AbortController() constructor. Communicating with an asynchronous operation is done using an AbortSignal object.

```jsx
const controller = new AbortController();
```

```jsx
const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {
  signal: controller.signal,
}); // this make final request only can running
```

[Next: One more effect](./17-one-more-effect.md)
