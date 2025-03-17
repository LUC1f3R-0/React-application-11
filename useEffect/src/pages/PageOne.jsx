import React from 'react'
import {useCounter} from '../hooks/useCount'

const PageOne = () => {
    const count = useCounter(4)

    return (
        <div>
            <h1>I'm counting {count} times</h1>

        </div>
    )
}

export default PageOne
