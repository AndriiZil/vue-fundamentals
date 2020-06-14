<template>
  <div class="car">
    <h3>Car-Name: {{ carName }} | {{ reverseName }}</h3>
    <h3>Car-Year: {{ carYear }} | {{ reverseName }}</h3>
    <button @click="changeName">Change Name</button>
    <button @click="changeFunc">Change From Parent</button>
    <button @click="updateCounter">Update counter</button>
  </div>
</template>

<script>
  import { eventEmitter } from '../main';

  export default {
    name: 'Car',
    // props: ['carName', 'carYear'],
    // props: {
    //   carName: String,
    //   carYear: Number
    // },
    props: {
      carName: {
        type: String,
        required: true,
        default: 'Default Name'
      },
      carYear: {
        type: Number,
        required: true
      },
      changeFunc: Function
    },
    methods: {
      changeName() {
        this.carName = 'Mazda';
        this.$emit('nameChanged', this.carName);
      },
      updateCounter() {
        eventEmitter.$emit('counterUpdated', 3);
      }
    },
    computed: {
      reverseName: function () {
        return this.carName.split('').reverse().join('');
      }
    }
  }
</script>

<style scoped>
  .car {
    border: 1px solid black;
  }
</style>