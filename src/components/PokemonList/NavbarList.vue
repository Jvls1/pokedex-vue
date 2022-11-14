<template>
    <div style="margin-top:1rem; margin-bottom:1rem;">
        <div class="flex flex-row justify-content-between" style="margin-bottom: 0.5rem;">
            <h1 class="title">Pokédex</h1>
            <p>Filter</p>
        </div>
        <SearchField/>
    </div>
</template>

<script>
import SearchField from './SearchField.vue'
export default {
    components: { 
        SearchField 
    },
}
</script>
<style scoped>
    
</style>