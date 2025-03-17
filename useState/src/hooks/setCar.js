import React from 'react'

export function useCar() {
    const [car, setCar] = React.useState(
        {
            brand: 'Ferrari',
            model: '488 GTB',
            year: 2020,
            color: 'Red'
        }
    )
    return { ...car, setCar }
}