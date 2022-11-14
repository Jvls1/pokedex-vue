<template>
    <div class="flex flex-row justify-content-evenly w-full">
        <div class="flex flex-column align-items-center" style="width:5rem;">
            <p>{{getWeightFormated}} kg</p>
            <p>Weight</p>
        </div>
        <div class="flex flex-column align-items-center" style="width:5rem;">
            <p>{{getHeightFormated}} m</p>
            <p>Height</p>
        </div>
        <div class="flex flex-column align-items-center" style="width:5rem;">
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
    },
    computed: {
        getWeightFormated() {
            console.log(this.weight)
            let weight = this.weight;
            return weight / 10;
        },
        getHeightFormated() {
            console.log(this.height)
            let height = this.height;
            height = height / 10;
            return height.toFixed(2);
        }
    }
}
</script>

<style scoped>
</style>