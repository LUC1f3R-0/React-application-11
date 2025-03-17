import { mappingUsers } from '../functions/map.jsx'

const Api = () => {
    const userElements = mappingUsers();
    return (
        <section>
            <h1>Users</h1>
            <ul>{userElements}</ul>
        </section>
    )
}

export default Api
