function isArray(input) {
    return Array.isArray(input)
}

function isString(input) {
    return typeof input === 'string'
}

function builder({ output, args }) {
    const outputIsArray = isArray(output)
    const outputIsString = isString(output)
    if (!outputIsArray && !outputIsString) {
        throw new TypeError(
            'The first argument passed to `builder()` must of type `string` or `array`.'
        )
    }
    return args.reduce((accumulator, arg, i) => {
        if (Boolean(arg)) {
            if (outputIsArray) {
                accumulator.push(arg)
            } else if (outputIsString) {
                accumulator += (i !== 0 ? ' ' : '') + arg
            }
        }
        return accumulator
    }, output)
}

function list(...args) {
    return builder({ output: [], args })
}

function string(...args) {
    return builder({ output: '', args })
}

module.exports = {
    list,
    string
}
