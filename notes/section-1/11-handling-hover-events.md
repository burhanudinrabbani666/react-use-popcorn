## Handling hover events

Hover is another term for mouse enter. That's why we use onMouseEnter to create a temporary star effect.

```jsx
const [tempRating, setTempRating] = useState(0);

<Star
  key={index}
  onRate={() => handleRating(index + 1)}
  onHoverIn={() => setTempRating(index + 1)}
  onHoverOut={() => setTempRating(0)}
  full={tempRating ? tempRating >= index + 1 : rating >= index + 1}
/>;
```

[Next: props as component api](./12-props-as-component-api.md)
