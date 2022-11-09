<template>
    <div class="container-img">
        <img :src="linkImage" style="width:100%; height:100%; object-fit:contain;"/>
    </div>
</template>

<script>
export default {
    props: {
        linkImage: String
    }
}
</script>

<style scoped>
</style>