<template>
  <div id="app">
    <h1>Parent: {{ carName }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Counter />
    <Car
        :car-name="carName"
        :car-year="carYear"
        :changeFunc="changeNameToAudi"
        @nameChanged="carName=$event"
        @counterUpdated="counter=$event"
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Car from './components/Car.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Car,
    Counter
  },
  data: function () {
    return {
      carName: 'BMW FROM PARENT',
      carYear: 2019
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
