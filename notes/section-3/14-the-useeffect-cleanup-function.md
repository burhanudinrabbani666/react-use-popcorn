# THE USEEFFECT CLEANUP FUNCTION

## USEEFFECT CLEANUP FUNCTION

- Function that we can return from an effect (optional)
- Runs on two different occasions:
  1. Before the effect is exxecuted again
  2. after a components has unmounted
- Necesarry whenever the side effect keeps happening after the components has been re-rendered or unmounted
- Each effect should do only one thing! Use one useeffect hook for each side effect. This make effects easier to clean up

[Next: Cleaning up the title](./15-celnaing-up-the-title.md)
