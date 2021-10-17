import { useState } from '#app'

export interface User {
    id: string,
    email: string,
    fullname?: string
}

const authUser = useState<User>('auth-user',
    () => (localStorage.getItem('auth-user') || {}) as User
)

function authStore() {

    return {
        user: authUser,
        isAuthenticated: authUser.value != null,
        setLogged: (current: User) => {
            authUser.value = current
        }
    }
}

export default authStore

