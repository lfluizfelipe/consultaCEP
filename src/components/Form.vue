<template>
  <div
      class="user-form"
    >
    <form class="user-form__form">
      <v-text-field
        v-model="cep"
        :error-messages="cepErrors"
        label="CEP" solo dense
        required
        class="text-field"
        v-mask="cepValidation"
        type="number"
      ></v-text-field>
      <v-btn
        class="mr-4"
        @click="searchByCep"
      >
        <span>Pesquisar CEP</span>
        <v-icon right>
        mdi-magnify
        </v-icon>
      </v-btn>
      <v-btn 
        @click="clearcep"
      >
        <span>Limpar</span>
        <v-icon right>
        mdi-close-thick
        </v-icon>
      </v-btn>
    </form>
    <AddresResponse v-if="address.state" :address="address" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import searchAddressService from '../services/search-address.service';
import AddressModel from '../models/address.model';
import AddresResponse from './AddresResponse.vue';

@Component({
  components: {
    AddresResponse
  },
})
export default class Form extends Vue {
  private cep = '';

  private address = new AddressModel();

  private clearcep() {
    this.cep = '';
    this.address = new AddressModel();
  }
  
  private cepValidation = {
    mask: '########',
    tokens: {
      '#': { pattern: /\[0-9]{8}/ },
        },
  };

  private searchByCep() {
    searchAddressService.searchAddressByCep(this.cep)
      .then((response: any) => {
        this.address = new AddressModel(response.data);
      });
  }
}
</script>

<style lang="sass" scoped>
.user-form
  width: 50%
  &__text-field
    padding: 200px
    height: 500px
  &__form
    text-align: right
</style>
