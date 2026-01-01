## Imporving component

create components with enough props to allow customization by developers or other users.

```jsx
export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {}
```

[Next: Prototypes](./14-proptypes.md)
