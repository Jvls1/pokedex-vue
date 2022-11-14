<template>
  <div>
    <ListCard/>
  </div>
</template>

<script>
import ListCard from '@/components/PokemonList/ListCard.vue'

export default {
  name: 'PokedexListView',
  components: {
    ListCard
  }
}
</script>
