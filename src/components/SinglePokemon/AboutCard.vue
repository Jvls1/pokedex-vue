<template>
    <div class="flex flex-row justify-content-evenly w-full">
        <div class="flex flex-column align-items-center">
            <p>{{weight}} kg</p>
            <p>Weight</p>
        </div>
        <div class="flex flex-column align-items-center">
            <p>{{height}} m</p>
            <p>Height</p>
        </div>
        <div class="flex flex-column align-items-center">
            <div class="flex flex-column ">
                <li v-for="ability in abilities" :key="ability">
                    <p class="capitalize">
                        {{ability.ability.name}}
                    </p>
                </li>
            </div>
            <p>Moves</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        weight: Number,
        height: Number,
        abilities: Array
    }
}
</script>

<style scoped>
</style>