<template>
  <div>
    <button class="btn btn-success" @click="updateCounter(1)">Add</button>
    <button class="btn btn-danger" @click="updateCounter(-1)">Substract</button>
  </div>
</template>

<script>
  export default {
    methods: {
      updateCounter(value) {
        // this.$store.state.counter +=value
        // this.$store.commit('changeCounter', value)
        this.$store.dispatch('asyncChangeCounter', {
          counterValue: value,
          timeOutDelay: 0
        })
      }
    }
  }
</script>

<style scoped>

</style>