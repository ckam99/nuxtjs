<script lang="ts" setup>

const emit = defineEmits(['onChange'])

function handleChange(e: Event) {
    emit('onChange', (<HTMLInputElement>e.target).value)
}

</script>

<template>
    <input @input="handleChange" v-bind="$attrs" />
</template>

<style>
.input {
    border: 1px solid #ccc;
    padding: 8px 15px;
    outline: none;
    border-radius: 5px;
}
.input:focus {
    border-color: #00dc82;
}
</style>