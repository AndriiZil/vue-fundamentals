<template>
  <div>
    <h1>Car id {{ id }}</h1>

    <button
        type="button"
        class="btn btn-success mb-2"
        @click="goBackToCars"
    >Back</button>
    <br>
    <router-link
        tag="button"
        class="btn btn-info mt-2"
        :to="{name: 'carFull', params: { id }, query: {name: 'Mazda', year: 2020}, hash: '#scroll'}"
    >Full Info</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // id: this.$router.currentRoute.params['id']
        id: this.$route.params['id']
      }
    },
    methods: {
      goBackToCars() {
        this.$router.push('/cars')
      }
    },
    watch: {
      $route(toR) {
        this.id = toR.params['id']
      }
    },
    beforeRouteLeave(to, fromR, next) {
      console.log('beforeRouteLeave');
      if (window.confirm('Are you sure you want to leave?')) {
        next()
      } else {
        next(false);
      }
    }
  }
</script>

<style scoped>

</style>