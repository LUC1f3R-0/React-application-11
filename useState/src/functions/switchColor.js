
export function switchColor(setColor) {
    setColor(prevColor => { return { color: prevColor.color === "blue" ? "red" : "blue" } })
}