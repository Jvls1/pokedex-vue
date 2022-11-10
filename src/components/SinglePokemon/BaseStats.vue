<template>
    <div class="flex flex-row">
        <div class="flex" style="width: 4rem; flex-grow: 0;">
            <p class="capitalize font-bold type-color-text">{{getBaseStatsNameFormat}}</p>
        </div>

        <div class="flex" style="width: 3.5rem; flex-grow: 0; justify-content: end;">
            <p style="text-align: right;">{{baseStatsNumber}}</p>
        </div>

        <div class="flex flex-row align-items-center w-full" style="flex-grow: 1;">
            <div class="container-stats" >
                <div class="stats-bar stats-bar-size" :style="getBaseStatsNumber">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        baseStatsNumber: Number,
        baseStatsName: String,
        typeColorCss: String
    },
    computed: {
        getBaseStatsNumber() {
            let baseStats = this.baseStatsNumber;
            let x = baseStats * 100 / 255;
            return `width: ${x}%`;
        },
        getBaseStatsNameFormat() {
            console.log(this.baseStatsName);
            let baseStatsNameFormated = {
                hp: 'HP',
                attack: 'ATK',
                defense: 'DEF',
                'special-attack': 'SATK',
                'special-defense': 'SDEF',
                speed: 'SPD'
            }
            return baseStatsNameFormated[this.baseStatsName];
        }
    }
}
</script>

<style scoped>
    .container-stats {
        width: 100%;
        background-color: #ddd;
    }
    .stats-bar {
        color: v-bind('typeColorCss');
        text-align: right;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .stats-bar-size {
        background-color: v-bind('typeColorCss');
    }
</style>