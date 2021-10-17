import { useState } from '#app'

export interface User {
    id: string,
    email: string,
    fullname?: string
}

function authStore() {

    const AUTH_TAG = 'auth-user'

    const authUser = useState<User>(AUTH_TAG,
        () => JSON.parse(localStorage.getItem(AUTH_TAG) || '{}') as User
    )

    return {
        user: authUser,
        isAuthenticated: authUser.value != null,
        setLogged: (current: User) => {
            authUser.value = current
            localStorage.setItem(AUTH_TAG, JSON.stringify(current))
        }
    }
}

export default authStore

