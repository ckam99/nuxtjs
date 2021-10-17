<script lang="ts">
export default {
    layout: false
}
</script>
<script lang="ts" setup>
import useAuthStore from '@/store/authenticate'
import { reactive } from 'vue'

const { setLogged } = useAuthStore()
const state = reactive({ email: '', password: '', errors: false })
const router = useRouter()

function handleSubmit() {

    if (state.email === 'test@example.com' && state.password === '123') {
        setLogged({
            id: 1,
            email: state.email,
            fullname: 'Guest'
        })
        router.push('/')
    } else {
        state.errors = true
    }
}

</script>
<template>
    <form class="container" @submit.prevent="handleSubmit">
        <img src="@/assets/img/nuxt.svg" />

        <h1>Sign in</h1>
        <div class="errors" v-if="state.errors">Email or password incorrect</div>
        {{ state.email }}
        <div class="div__group">
            <input
                type="email"
                class="input"
                placeholder="Email"
                name="email"
                v-model="state.email"
                required
            />
        </div>
        <div class="div__group">
            <input
                type="password"
                class="input"
                placeholder="Password"
                name="password"
                v-model="state.password"
                required
            />
        </div>
        <div class="div__group">
            <button type="submit">Login</button>
        </div>
    </form>
</template>

<style scoped>
.container {
    width: 60%;
    margin: 60px auto;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
}
h1 {
    color: #002e3b;
}
button {
    border: 1px solid #00dc82;
    display: flex;
    align-items: center;
    border-radius: 3px;
    cursor: pointer;
    background: transparent;
    padding: 8px;
    color: #00dc82;
    transition: all 0.2s ease-in-out;
}
button:hover {
    background: #00dc82;
    color: #fff;
}

button:focus {
    opacity: 0.5;
}
.input {
    border: 1px solid #ccc;
    padding: 8px 15px;
    outline: none;
    border-radius: 5px;
}
.input:focus {
    border-color: #00dc82;
}
.div__group {
    margin: 5px;
    display: flex;
}
.errors {
    background-color: rgb(247, 210, 217);
    color: crimson;
    padding: 15px;
    text-align: center;
}
</style>