// eslint-disable-next-line no-bitwise
const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
export const unsafeGUID = () =>
    `${S4()}${S4()}-${S4()}-4${S4().substr(0, 3)}-${S4()}-${S4()}${S4()}${S4()}`.toLowerCase()

export const removeAtIndex = (arr, index) => [...arr.slice(0, index), ...arr.slice(index)]
