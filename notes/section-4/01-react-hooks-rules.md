# REACT HOOOKS RULES

## What are react hooks

1. Special build in functions that allows us to "hook" into react internals (API)
   - Creating and accessing state from fiber tree
   - Registring side effect in fiber tree
   - Manual DOM selections
   - Many more...
2. Always start with "use" (useState, useEffect, etc)
3. Enable easy reusing of non-visual logic; we can compose multiaple hooks into our own custom hooks
4. Give function components the ability to own state and run side effect at diffrent lifecycle points (before v16.8 only avaiabe in class components)

## The rukes of hooks

1. Only call hooks at the top level
   - Do NOt call hooks inside conditionals, loops, nested functios, or after an early return
   - This is necessary to esure that hooks are always called in the same order (hooks rely on this)

2. Only call hooks from react functions
   - Inly call hooks inside a function components or acustom hook

[Next: Rules in hooks in practce](./02-rules-of-hook-in-practice.md)
