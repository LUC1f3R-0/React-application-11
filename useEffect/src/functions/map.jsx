import { useUserHook } from '../hooks/useUsers'

export function mappingUsers() {
    const users = useUserHook()
    const userElements = users.map(user => <li key={user.id}>{user.name}</li>)
    return userElements
}
