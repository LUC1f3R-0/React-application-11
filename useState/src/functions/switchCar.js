

export function switchCar(setCar) {
    setCar(prevCar => {
        return {
            brand: prevCar.brand === 'Ferrari' ? "Lamborghini" : "Ferrari",
            model: prevCar.model === '488 GTB' ? "Huracán Evo" : "488 GTB",
            year: prevCar.year === 2020 ? 2015 : 2020,
            color: prevCar.color === 'Red' ? "Yellow" : "Red",
        }
    })
}