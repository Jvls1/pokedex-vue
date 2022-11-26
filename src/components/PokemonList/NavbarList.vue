<template>
    <div style="margin-top:1rem; margin-bottom:1rem;">
        <div class="flex flex-row justify-content-between" style="margin-bottom: 0.5rem;">
            <TitleContainer @click="listAll" class="title">Pokédex</TitleContainer>
            <p>Filter</p>
        </div>
    </div>
</template>

<script>
import TitleContainer from '../UI/TitleContainer.vue';

export default {
    components: { TitleContainer },
    methods: {
        listAll() {
            this.$emit('listAll');
        }
    }
}
</script>
<style scoped>
    .title {
        cursor: pointer;
    }
</style>