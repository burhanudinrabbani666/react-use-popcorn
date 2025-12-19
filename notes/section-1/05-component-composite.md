## Compoenent Composite

### Using component

Modal

```jsx
function Modal() {
  return (
    <div>
      <Success />
    </div>
  );
}

function Success() {
  return <p>Well Done</p>;
}
```

### Compoenent Composition

```jsx
function Modal({ children }) {
  return <div>{children}</div>;
}

<Modal>
  <Succcess />
</Modal>;

function Success() {
  return <p>Well Done</p>;
}
```

Components Composition: Combinign different component using the chidren prop (or explictly defined props)

**We component composition, We can:**

- Create Highly reusable and flexible Components
- Fixing props drilling

[Next: Fixing Props](./06-fixing-prop.md)
