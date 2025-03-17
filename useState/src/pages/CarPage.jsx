import React from 'react';
import { useCar } from '../hooks/setCar';
import { switchCar } from '../functions/switchCar'
const CarPage = () => {
    const { brand, model, year, color, setCar } = useCar();

    return (
        <>
            <h1>My {brand}</h1>
            <h2>it is a {color} {model} from {year}</h2>
            <button onClick={() => switchCar(setCar)}>change</button>
        </>
    );
};

export default CarPage;
