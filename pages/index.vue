<script lang="ts" setup>
import Icon from '@/components/Icon.vue'
// import useCounter from '~~/composables/counter';

// const { counter, increment, decrement } = useCounter({ initValue: 3, stepValue: 1 })
import useCounterStore from '@/store/counter'

const { counter, increment, decrement } = useCounterStore('counter', { initValue: 3, stepValue: 1 })

</script>
<template>
    <div>
        <h1>Wecome Nuxt {{ counter }}</h1>
        <div style="display: flex; justify-content: center;">
            <button @click="decrement">
                <span>Decrement</span>
            </button>

            <button @click="increment" style="margin-left: 10px;">
                <Icon name="plus" />
                <span>Increment</span>
            </button>
        </div>
    </div>
</template>

<style>
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