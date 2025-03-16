import React from 'react'


export function useColor() {
    const [color, setColor] = React.useState({ color: 'blue' })
    return { color, setColor }
}
