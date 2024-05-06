<script setup>
import NavbarBlanco from '@/components/generals/NavbarBlanco.vue'
import NavbarNegro from '@/components/generals/NavbarNegro.vue'
import Footer from '@/components/generals/Footer.vue'
import { RouterView, useRoute } from "vue-router" 

const ruta = useRoute();
/* const listaruta = ['/ecommerce']
const mostrarnavbar = !listaruta.includes(ruta.path); */

/*console.log('mostrarnavbar', mostrarnavbar);*/
</script>

<template>
    <div :class="ruta.meta.shownavbar?'fondoazul':'fondoblanco'">
    <NavbarBlanco v-if="ruta.meta.shownavbar"/>
    <NavbarNegro v-else/>
    <RouterView/>
    <Footer/> 
    </div>
</template>

<style scoped>
.fondoazul{
    background-color: #000315;
    color: white;
}

.fondoblanco{
    background-color: #f4f7f8;
    color: black;
}
</style>
