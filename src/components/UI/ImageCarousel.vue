<template>
    <div class="container-img">
        <img :src="linkImage" class="carousel-image"/>
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
.carousel-image {
    width:100%;
    height:100%;
    object-fit:contain;
}
</style>