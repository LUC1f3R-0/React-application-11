import React from "react";

export function useUserHook() {
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => setUsers(data))
                .catch(error => console.error("Error fetching users:", error));
        }, 2000)
    }, [])

    return users
}
