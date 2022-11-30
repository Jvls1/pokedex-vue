<template>
  <div>
    <ListContainer/>
  </div>
</template>

<script>
import ListContainer from '@/components/PokemonList/ListContainer.vue'

export default {
  name: 'PokedexListView',
  components: {
    ListContainer
  }
}
</script>
