<template>
  <v-card class="card" color="#eeeeee">
    <p class="card__result">Resultado da busca por CEP ({{address.zipCode}})</p>
    <p class="card__address-response">{{address.street}}</p>
    <p class="card__address-response">{{address.district}} - {{address.location}} - {{address.state}}</p>
    <p class="card__address-response"><b>IBGE:</b> {{address.ibge}}</p>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AddressModel from '../models/address.model';

@Component
export default class AddresResponse extends Vue {

  @Prop({ type: AddressModel, default: new AddressModel() })
  private address!: AddressModel; //Propriedade obrigatória "!"
  
  @Prop({ type: Boolean, default: false })
  private isSaoPaulo?: boolean; //Propriedade Opcional "?"
}
</script>

<style lang="sass" scoped>
.card
  text-align: left
  margin-top: 50px
  padding: 20px
  background: #eeeeee
  border-radius: 5px !important
  &__result
    font-size:24px
    font-weight: 700
    margin-bottom: 10px
  &__address-response
    font-size: 13px
    margin-bottom: 5px
</style>