# z-index and how stacking context is formed

- Specifies the stack order of an element. The higher the number the higher the priority of that element being on the top stack.

## Can only be applied to elements that have a position property on them.

## When the z-index is not on any element, elements are stacked in the following order from bottom to top

1. The background and borders of the root element.
2. Descendant non-positioned blocks, in order of appearance in the HTML
3. Descendant positioned elements, in order of appearance in the HTML
