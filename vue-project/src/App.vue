<template>
  <div id="app">
    <h1>Parent: {{ carName }}</h1>
    <h2>Title: {{ title }}</h2>

    <h2 v-colored v-if="visible">Directive</h2>
    <h2 v-modify:background.font="'green'">Font</h2>
    <h2 v-modify:color.delay="'blue'">Font</h2>
    <h2 v-elastic="'green'">Elastic Color Directive</h2>
    <h2 v-elastic:background="'red'">Elastic Color Directive</h2>
    <h2 v-elastic:background="'yellow'">Elastic Color Directive</h2>
    <h2 v-font>Local Font Directive</h2>

<!--    <button v-on:click.prevent.stop></button>-->

    <button @click="visible = !visible">Toggle</button>
    <button @click="title = 'New Title'">Change Title</button>

    <hr>

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
      carYear: 2019,
      visible: true,
      title: 'Old Title'
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
  },
  directives: {
    font: {
      bind(el, bindings, vnode) {
        console.log(bindings, vnode);
        el.style.fontSize = '40px';
      }
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
