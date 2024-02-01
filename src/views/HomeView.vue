<script setup>
 import usePropiedades from '../composables/usePropiedades'
  import Propiedad from '../components/Propiedad.vue'
  import {priceProperty} from '../helpers'
const { piscina, filteredItems} = usePropiedades()
</script>

<template>
  <main>
    <h1 class="text-center text-h3 font-weight-bold my-5 text-uppercase">Nuestras Propiedades</h1>
  
  <v-card flat class="py-10">

    <v-card-title class="text-h5">
      Búsqueda
  
     <v-checkbox label="piscina" v-model="piscina"/>
    </v-card-title>

    <v-row>
      <Propiedad
        v-for="propiedad in filteredItems"
        :key="propiedad.id"
        :propiedad="propiedad"
        :price="priceProperty"
      />

    </v-row>


  </v-card>
  
  
  </main>
</template>