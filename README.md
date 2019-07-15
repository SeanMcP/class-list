# Class List

🦆 A simpler class list builder

## API

There are two named exports from the `class-list` library: `array`, and `string`. They function in the same manner and differ only in what they return.

Call either function and pass the desired class names as arguments:

```js
classList.array('one', 2, 'three', 4)
// -> ['one', 2 'three', 4]
```

Arguments at evaluate to `false` are removed from the output:

```js
classList.string(0, 'one', undefined, 'three')
// -> 'one three'
```

This means you can use conditions in the passed arguments to selectively add classes:

```js
let time = 1

classList.string('book', time < 1 && '--due')
// -> 'book'

time = 0

classList.array('book', time < 1 && '--due')
// -> ['book', '--due']
```

## Examples

### React

```jsx
import React from 'react'
import { string } from 'class-list'

export default function ToggleButton(props) {
    const [isOn, toggle] = useToggle() // A basic custom hook
    return (
        <button
            className={string('ToggleButton', isOn && 'ToggleButton--on')}
            onClick={toggle}
            {...props}
        >
            ToggleButton
        </button>
    )
}
```
