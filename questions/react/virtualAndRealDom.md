# Virtual DOM vs Browser DOM

## React

1. Every DOM object has a cooresponding virtal DOM object, like a lightweight copy.
2. Has same properties as a real DOM but it lacks power to directly change what's on the screen
3. Manipulating is much faster because nothing gets drawn on screen.

## DOM

1. Manipulating the DOM is slow

- When a JSX element is rendered every single VDOM obj gets updated.
- Sounds inefficient but cost is not signficant since the VDOM updates so quickly.
- Once the VDOM is updated it compares the current VDOM vs a snapshot (VDOM before the update).
- Diffing: the process of figuring out what changed from the new VDOM vs the snapshot.
- React will then update the real DOM once it knows what changed in the VDOM and only change those objects.

## Diffing

- The virtual dom is a copy of the real dom. The virtual dom will look at the real dom and if there is a difference then the dom will update with that change.
