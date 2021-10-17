<script lang="ts" setup>
import useCounterStore from '@/store/counter'

const { counter } = useCounterStore()


</script>
<template>
    <div class="container">
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <span>|</span>
            <NuxtLink to="about">About</NuxtLink>
            <span>|</span>
            <NuxtLink to="contact">Contact US</NuxtLink>
        </nav>

        <div>Global counter: {{ counter }}</div>

        <img src="@/assets/img/nuxt.svg" />
        <slot />
    </div>
</template>

<style>
nav a {
    text-decoration: none;
    margin: 5px 15px;
}
nav a.router-link-exact-active {
    text-decoration: underline;
    color: #002e3b;
}
.container {
    width: 60%;
    margin: 60px auto;
    padding: 40px;
    text-align: center;
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
</style>