// eslint-disable-next-line no-bitwise
const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
export const unsafeGUID = () =>
    `${S4()}${S4()}-${S4()}-4${S4().substr(0, 3)}-${S4()}-${S4()}${S4()}${S4()}`.toLowerCase()

export const intCmpRirection = (a, b) => Math.abs(a - b) / a - b

export const removeAtIndex = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)]

export const moveAtIndexArr = (arr, index, newIndex) => {
    if (index === newIndex) {
        return arr
    }

    const arrCopy = [...arr]

    arrCopy.splice(index , 1)

    arrCopy.splice(newIndex , 0, arr[index])

    return arrCopy
}

export const getRandomColor = () => {
    var letters = '0123456789ABCDEF'

    var color = '#'

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color
}

