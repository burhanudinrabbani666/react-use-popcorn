# USE EFFECT DEPENDENCY ARRAY

- 👉 By default, effects run after every render. We can prevent that by passing a dependency array
- 👉 Without the dependency array, React doesn’t know when to run the effect
- 👉 Each time one of the dependencies changes, the effect will be executed again
- ☝ Every state variable and prop used inside the effect MUST be included in the dependency array

## USEEFFECT IS A SYNCHRONIZATION MECHANISM

- 👉 useEffect is like an event listener that is listening for one dependency to change. Whenever a dependency changes, it will execute the effect again
- 👉 Effects react to updates to state and props used inside the effect (the dependencies). So effects are “reactive” (like state updates re-rendering the UI)

## SYNCHRONIZATION AND LIFECYCLE

### SYNCHRONIZATION

- Effect synchronizes with x, y, and z
- Effect synchronizes with no state/props
- Effect synchronizes with everything

### 🐣 LIFECYCLE

- Runs on mount and re-renders triggered by updating x, y, or z
- Runs only on mount (initial render)
- Runs on every render (usually bad ⛔)

[Next: synchronizing query](./09-synchronizing-query.md)
