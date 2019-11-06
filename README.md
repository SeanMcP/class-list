# Class List

[![npm](https://img.shields.io/npm/v/@seanmcp/class-list.svg)](https://npmjs.com/package/@seanmcp/class-list) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@seanmcp/class-list.svg)](https://npmjs.com/package/@seanmcp/class-list) [![npm](https://img.shields.io/npm/dt/@seanmcp/class-list.svg)](https://npmjs.com/package/@seanmcp/class-list)

🦆 A simpler class list builder

## Use

```js
classList('Build', 'class lists', true && 'without', 'fear')
// -> 'Build class lists without fear'
```

## Why

[Jed Watson's `classnames` library](https://github.com/JedWatson/classnames) is pretty much the industry standard for building a list of class names. Definitely check that out if you haven't already.

This library serves as an alternative with a simpler API for conditional classes. Instead of building dynamic keys on passed objects, you can use a simple `&&` binary to pass the class if the condition is `true`.

## Install

```sh
npm install @seanmcp/class-list
# or
yarn add @seanmcp/class-list
```

## API

Import or require the default function exported from `@seanmcp/class-list`, then call and pass the desired class names as arguments:

```js
classList('one', 2, 'three', 4)
// -> 'one 2 three 4'
```

Arguments at evaluate to `false` are removed from the output:

```js
classList(0, 'one', undefined, 'three')
// -> 'one three'
```

This means you can use conditions in the passed arguments to selectively add classes:

```js
let time = 1

classList('book', time < 1 && '--due')
// -> 'book'

time = 0

classList('book', time < 1 && '--due')
// -> 'book --due'
```

## Examples

### React

```jsx
import React from 'react'
import classList from '@seanmcp/class-list'

export default function ToggleButton(props) {
    const [isOn, toggle] = useToggle() // A basic custom hook
    return (
        <button
            className={classList('ToggleButton', isOn && 'ToggleButton--on')}
            onClick={toggle}
            {...props}
        >
            ToggleButton
        </button>
    )
}
```
