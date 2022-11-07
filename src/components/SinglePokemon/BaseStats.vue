<template>
    <div class="flex flex-row">
        <div class="flex" style="width: 4rem; flex-grow: 0;">
            <p class="capitalize font-bold type-color-text">{{baseStatsN}}</p>
        </div>

        <div class="flex" style="width: 3.5rem; flex-grow: 0; justify-content: end;">
            <p style="text-align: right;">{{baseStatsNumber}}</p>
        </div>

        <div class="flex flex-row align-items-center w-full">
            <div class="container-stats" >
                <div class="stats-bar stats-bar-size" :style="baseStatKJJ" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        baseStatsNumber: Number,
        baseStatsName: String,
    },
    data() {
        return {
            baseStatsNameFormatedObj: {
                hp: 'HP',
                attack: 'ATK',
                defense: 'DEF',
                'special-attack': 'SATK',
                'special-defense': 'SDEF',
                speed: 'SPD'
            },
            baseStatN: String,
            baseStatKJJ: String,
        }
    },
    beforeMount() {
        // getBaseStatsNumber() {
            console.log(this.baseStatsNumber);
            let x = this.baseStatsNumber * 100 / 255;
            this.baseStatsN = `width: ${x}%`;
        // },
        // getBaseStatsNameFormat() {
            console.log(this.baseStatsName);
            this.baseStatKJJ = this.baseStatsNameFormated[this.baseStatsName];
        // }
    }
}
</script>

<style>
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
    width: v-bind('baseStatsNumber');
    background-color:v-bind('typeColorCss');
  }
</style>