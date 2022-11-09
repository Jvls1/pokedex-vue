<template>
    <li v-for="type in pokemon.types" :key="type.color">
        <h3 class="type-tag capitalize" :style="getCssColor(type.type.name)">
            {{type.type.name}}
        </h3>
    </li>
</template>

<script>
export default {
    props: {
        types: Array
    }
}
</script>

<style scoped>
</style>