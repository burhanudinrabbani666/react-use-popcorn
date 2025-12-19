## Building Reusable

```jsx
export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={starConitenrStyle}>
        {Array.from({ length: maxRating }, (_, index) => {
          return (
            <Star
              key={index}
              onRate={() => handleRating(index + 1)}
              full={rating >= index + 1}
            />
          );
        })}
      </div>
      <p style={textStyle}>{rating || ""}</p>
    </div>
  );
}
```

[Next: Creating The Stars](./10-creatin-the-stars.md)
