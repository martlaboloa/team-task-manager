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

// incorrect, incomplete
// export const moveAtIndexObj = (obj, id, newIndex) => {
//     const index = obj[id].index
//
//     if (index === newIndex) {
//         return obj
//     }
//
//     newIndex > index
//
//     return obj.reduce((result, value, key) => {
//         let updatedIndex = value.index
//         let indexChanged = false
//
//         const currIndex = value.index
//
//         if (currIndex >= index && currIndex <= newIndex) {
//             updatedIndex = currIndex - 1
//             indexChanged = true
//         }
//
//
//         return {
//             ...result,
//             [key]: indexChanged ? {
//                 ...value,
//                 index: updatedIndex,
//             } : value
//
//         }
//     }, {})
// }

export const getRandomColor = () => {
    var letters = '0123456789ABCDEF'

    var color = '#'

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color
}

