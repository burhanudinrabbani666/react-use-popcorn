# A FIRST LOOK AT EFFECT

## SIDE EFFECT

A side effect is basically any “interaction between a React component and the world outside the component”. We can also think of a side as “code that actually does something”. Examples: Data fetching, setting up subscriptions, setting up timers, manually accessing the DOM, etc.

We need side effects all the time. They make our applications do something. Not in render logic!

can be made in:

- EVENT HANDLERS
- EFFECTS (useEffect): Effects allow us to write code that will run at different moments: mount, re- render, or unmount

### EVENT HANDLERS

- 👉 Executed when the corresponding event happens
- 👉 Used to react to an event

  Preferred way of creating side effects

### EFFECTS

- 👉 Executed after the component mounts (initial render), and after subsequent re-renders (according to dependency array)
- 👉 Used to keep a component synchronized with some external system (in this example, with the API movie data). **(Thinking about synchronization, not lifecycles)**

[Next: using async function](./05-using-async-function.md)
