const classList = require('./index')

describe('classList', () => {
    const arg1 = 'arg1',
        arg2 = 'arg2'

    describe('array', () => {
        it('When passed a single argument, returns an array', () => {
            expect(classList.array(arg1)).toEqual([arg1])
        })

        it('When passed multiple arguments, returns an array of arguments', () => {
            expect(classList.array(arg1, arg2)).toEqual([arg1, arg2])
        })

        it('When passed an undefined argument, returns an array without said argument', () => {
            expect(classList.array(arg1, undefined, arg2)).toEqual([arg1, arg2])
        })

        it('When passed an argument that evaluates to `false`, returns an array without said argument', () => {
            expect(classList.array(arg1, 0, arg2)).toEqual([arg1, arg2])
        })
    })

    describe('string', () => {
        it('When passed a single argument, returns a string with no trailing space', () => {
            expect(classList.string(arg1)).toMatch(arg1)
        })

        it('When passed multiple arguments, returns a string of arguments', () => {
            expect(classList.string(arg1, arg2)).toMatch(`${arg1} ${arg2}`)
        })

        it('When passed an undefined argument, returns a string without said argument', () => {
            expect(classList.string(arg1, undefined, arg2)).toMatch(
                `${arg1} ${arg2}`
            )
        })

        it('When passed an argument that evaluates to `false`, returns a string without said argument', () => {
            expect(classList.string(arg1, 0, arg2)).toMatch(`${arg1} ${arg2}`)
        })
    })
})
