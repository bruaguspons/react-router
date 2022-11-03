export const setLocalInfo = (key, value) => {
    localStorage.setItem(key, JSON.stringify({ ...value }))
}

export const clearLocalInfo = (key) => {
    localStorage.removeItem(key)
}