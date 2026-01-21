# HOW NOT TO SELECT DOM

This make focus and get elemenet every time the application has change

```jsx
// NOT REACT WAY 🫸
useEffect(() => {
  const searchFieldsElement = document.querySelector(".search");

  console.log(searchFieldsElement);

  searchFieldsElement.focus();
}, []);
```

[Next: useRef](./07-introducing-useref.md)
