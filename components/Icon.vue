<script setup lang="ts">


type Props = {
    name: string,
    color?: string,
    stroke?: string,
    fill?: string,
    width?: number,
    height?: number,
}

withDefaults(defineProps<Props>(), {
    stroke: 'currentColor',
    fill: 'none',
    color: '#444',
    width: 24,
    height: 24
})

</script>

<template>
    <svg :fill="fill" :stroke="stroke" :width="width" :height="height" v-bind="$attrs">
        <use :xlink:href="`sprite.svg#${name}`" />
    </svg>
</template>

<style scoped>
svg {
    color: v-bind(color);
}
</style>
