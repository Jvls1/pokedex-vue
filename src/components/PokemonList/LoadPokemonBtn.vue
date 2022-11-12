<template>
    <button @click="renderCard">
        <slot></slot>
    </button>
</template>
<script>
export default {
    methods: {
        renderCard() {
            console.log('rendered');
        }
    }
}
</script>
<style>
    
</style>