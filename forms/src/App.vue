<template>
  <div>
    <h2>Form inputs</h2>
    <input type="text" v-model.lazy="name">
    <p>{{ name }}</p>

    <h2>Text Area</h2>
    <textarea v-model="textarea" />
    <p>{{ textarea }}</p>
    
    <h2>Check Boxes</h2>
    <label>
      <input type="checkbox" value="intagram" v-model="social"> Instagram
    </label>

    <label>
      <input type="checkbox" value="vk" v-model="social"> Vk
    </label>

    <label>
      <input type="checkbox" value="facebook" v-model="social"> Facebook
    </label>

    <hr>

    <ul>
      <li v-for="s in social" :key="s.id">{{ s }}</li>
    </ul>

    <hr>

    <h2>Radio</h2>
    <label>
      <input type="radio" value="intagram" v-model="socialRadio"> Instagram
    </label>

    <label>
      <input type="radio" value="vk" v-model="socialRadio"> Vk
    </label>

    <label>
      <input type="radio" value="facebook" v-model="socialRadio"> Facebook
    </label>

    <p>{{ socialRadio }}</p>

    <hr>
    <h2>Select List</h2>
    <select>
      <option
          v-for="s in socialsList"
          :key="s.id"
          :selected="s === defautlSocial"
      >{{ s }}</option>
    </select>

    <select v-model="defSocial">
      <option
          v-for="s in socialsList"
          :key="s.id"
      >{{ s }}</option>
    </select>

    <p>{{ defSocial }}</p>

    <h2>Numbers</h2>

    <input type="text" v-model.number="age">
    <p>{{ age }}</p>

    <hr>
    <h2>Controls</h2>

    <app-onoff v-model="switched"></app-onoff>

    <div>
      <h3 v-if="switched">Component is Enabled</h3>
      <h3 v-else>Component is Disabled</h3>
    </div>
  </div>
</template>

<script>
import Onoff from './Onoff';

export default {
  data() {
    return {
      textarea: 'Initial textarea',
      name: 'Initial State',
      social: ['vk'], // Default value
      socialRadio: 'facebook', // By default
      socialsList: ['instagram', 'vk', 'facebook'],
      defautlSocial: 'vk',
      defSocial: 'instagram',
      age: 25,
      switched: false
    }
  },
  watch: {
    age(value) {
      console.log(value);
      console.log(typeof value);
    }
  },
  components: {
    appOnoff: Onoff
  }
}
</script>

<style scoped>
  textarea {
    width: 150px;
    height: 150px;
  }

  p {
    white-space: pre;
  }
</style>
