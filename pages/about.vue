<script lang="ts">


export default {
    layout: false
}
</script>
<script setup lang="ts">

</script>
<template>
    <NuxtLayout name="custom">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum vero optio eos maiores, sunt hic ratione aut labore molestias
            doloremque necessitatibus quo saepe,
            quis dolore reiciendis non obcaecati. Dolore, perferendis.
        </p>
    </NuxtLayout>
</template>

<style>
.draggable {
    width: 500px;
    background: #fff;
    padding: 20px;
}
.draggable .item {
    position: relative;
    padding: 15px;
    text-align: center;
    background-color: blueviolet;
    color: #fff;
    cursor: pointer;
    margin: 5px;
}
.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}
/* .draggable .item::after {
    position: absolute;
    content: "";
    left: 0;
    width: 24px;
    border: 1px dotted #fff;
} */
</style>