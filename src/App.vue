<template>
  <base-card></base-card>
</template>

<script>
import BaseCard from './components/BaseCard.vue'

export default {
  name: 'App',
  components: {
    BaseCard
  }
}
</script>

<style>
:root{
  --type-color: #74cb48;
}
* {
  box-sizing:border-box
}
body, html {
  margin: 0px;
  padding: 0px;
}
</style>
