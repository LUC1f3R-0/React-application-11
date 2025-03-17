import React from 'react';

export function useCounter(value) {
    const [count, setCount] = React.useState(value);

    React.useEffect(() => {
        const intervalTime = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)
        return (() => clearInterval(intervalTime))
    }, [])

    return count;
}
