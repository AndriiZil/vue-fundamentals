<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">Car Name</label>
      <input id="name" type="text" class="form-control" v-model.trim="carName">
    </div>

    <div class="form-group">
      <label for="year">Car Year</label>
      <input id="year" type="text" class="form-control" v-model.number="carYear">
    </div>

    <button class="btn btn-success" @click="createCar">Create car</button>
    <button class="btn btn-primary" @click="loadPrice">Load Price</button>

    <hr>

    <ul class="list-group">
      <li
          class="list-group-item"
          v-for="car of cars"
          :key="car.id"
      >
        <strong>{{ car.name }}</strong> - {{ car.year }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      carName: '',
      carYear: '',
      cars: [],
      resource: null
    }
  },
  methods: {
    createCar() {
      const car = {
        name: this.carName,
        year: this.carYear
      }
      // this.$http.post('http://localhost:3000/cars', car)
      //   .then(response => {
      //     return response.json()
      //   })
      //   .then(newCar => {
      //     console.log(newCar);
      //   })
      this.resource.save({}, car);
    },
    loadPrice() {
      // this.$http.get('http://localhost:3000/cars')
      //   .then(response => {
      //     return response.json()
      //   })
      // .then(cars => {
      //   this.cars = cars;
      // })
      this.resource.get()
        .then(response => response.json())
        .then(cars => this.cars = cars)
    }
  },
  created() {
    this.resource = this.$resource('cars')
  }

}
</script>

<style>

</style>
