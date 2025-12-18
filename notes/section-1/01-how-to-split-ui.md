# How to split a Ui Into Components

## Components Size Matters

Generally, we need to find the righ balance between too specific and too broad

1. **if component is to small:**

   - we end up with 100's of mini components
   - confusing codebase
   - too Abstaracted

2. **if components to Huge:**

   - too many resposibilities
   - Might need too many props
   - Hard to re:use
   - Complex code. herd to understand

### The 4 criteria for spilting a ui into componets

1. Logical Seperation of content/layout
2. Reuseabilty
3. Responibility / complexity
4. Personal coding style

## When to create a new components

> When in doubbt, start with a relative big component contain piece of components as it become neccesary

- Does the component contain pieces of content or layout that dont belong together
- Is it possible to re use part of the component
- Do you want or need to reuse it
- Is the component doing to many differents things
- Does the compoenent rely on too many props
- Does the component have too many pieces of state and/or effect
- Is the code, includes JSX, too complex/confusing

- Create new compoents creating new abstraction, try not create early
- Name components accroding to what it does
- Never declare compoenents inside components
- Co-located components inside the same file
