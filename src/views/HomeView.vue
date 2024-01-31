<script setup>
 import usePropiedades from '../composables/usePropiedades'
  import Propiedad from '../components/Propiedad.vue'
 const { propiedadesCollection} = usePropiedades()
</script>

<template>
  <main>
    <h1 class="text-center text-h3 font-weight-bold my-5 text-uppercase">Nuestras Propiedades</h1>
  
  <v-card flat class="py-10">

    <v-row>

      <Propiedad
        v-for="propiedad in propiedadesCollection"
        :key="propiedad.id"
        :propiedad="propiedad"
      />

    </v-row>


  </v-card>
  
  
  </main>
</template>