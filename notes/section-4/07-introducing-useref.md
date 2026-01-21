# INTRODUCING USEREF HOOK

REF WITH useRef

- "Box" (object) with a **mutable**. current property that is **persisted across renders** ("normal" varibales are alaways reset)
- Two big use cases:
  1. Creating a variable that stays the same between renders (eg previous state, set timeout id, etc)
  2. Selecting and soring DOm elements
- Refs are for **data that is NOT rendered**: usually only appear in event handlers or effect, not in JSX(otherwise use state)

### STATE VS REFS

|       | Presists across<br/> renders | Updating cuases <br/> re-render | Immutabale | Asynchronus <br/> updates |
| ----- | ---------------------------- | ------------------------------- | ---------- | ------------------------- |
| STATE | ✅                           | ✅                              | ✅         | ✅                        |
| REFS  | ✅                           | ❎                              | ❎         | ❎                        |

[Next: Refs to select DOM](./08-refs-to-select-dom.md)
