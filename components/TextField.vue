<script lang="ts" setup>

const emit = defineEmits(['onChange'])

function handleChange(e: Event) {
    emit('onChange', (<HTMLInputElement>e.target).value)
}

</script>

<template>
    <input @input="handleChange" v-bind="$attrs" />
</template>