<template>
  <v-app id="app">
    <v-container>
      <Form/>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddresResponse from './components/AddresResponse.vue';
import Form from './components/Form.vue';

@Component({
  components: {
    Form,
    AddresResponse
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 90vh;
}
</style>
