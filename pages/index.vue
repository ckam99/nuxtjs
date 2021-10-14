<script lang="ts" setup>
import Icon from '@/components/Icon.vue'


</script>
<template>
    <div class="container">
        <img src="@/assets/img/nuxt.svg" />
        <h1>Wecome Nuxt 3</h1>
        <div style="display: flex; justify-content: center;">
            <button>
                <Icon name="plus" />
                <span>Click me</span>
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
button {
    border: none;
    display: flex;
    align-items: center;
    border-radius: 3px;
    cursor: pointer;
}
</style>