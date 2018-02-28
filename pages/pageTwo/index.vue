<template>
  	<div>
  		<h1>Second Page</h1>
  		<h2>Hello <b>{{dataFromStore}}</b></h2>
      <h3>Your gift from getters: <b>{{dataFromGetter}}</b></h3>
      <nuxt-link class="nav-link" to="/">Go back
        </nuxt-link>
  	</div>
</template>

<script>

export default {
  computed: {
  	dataFromStore() {
      return this.$store.state.randomData
    },
    dataFromGetter() {
      return this.$store.getters.getterData
    }
  }
}
</script>

<style>
</style>