const OUTPUT = {
    array: 'array',
    string: 'string'
}

function generateAccumulator(key) {
    switch (key) {
        case OUTPUT.array: {
            return new Array()
        }
        case OUTPUT.string: {
            return new String()
        }
    }
}

function builder({ output, args }) {
    return args.reduce((accumulator, arg, i) => {
        if (Boolean(arg)) {
            switch (output) {
                case OUTPUT.array: {
                    accumulator.push(arg)
                    break
                }
                case OUTPUT.string: {
                    accumulator += (i !== 0 ? ' ' : '') + arg
                    break
                }
            }
        }
        return accumulator
    }, generateAccumulator(output))
}

function array(...args) {
    return builder({ output: OUTPUT.array, args })
}

function string(...args) {
    return builder({ output: OUTPUT.string, args })
}

module.exports = {
    array,
    string
}
