<script setup>
import VideoEcommerce from '../components/uniques/VideoEcommerce.vue'
import Tabletinfo from '@/components/uniques/Tablet.vue'
import Contact from '@/components/generals/Contact.vue'

const backgroundcolor='contenedorblanco'
const placeholder="placeholderblanco"
const textocolor="colortextoblanco"
const labelcolor="labelcolorblanco"
const checkboxcolor="checkcolorblanco"
</script> 
 
<template>
<VideoEcommerce/>
<Tabletinfo/>
<Contact :backgroundcolor="backgroundcolor" :placeholdercolor="placeholder" :textocolor="textocolor" :labelcolor="labelcolor" :checkboxcolor="checkboxcolor"/>
</template>

<style scoped>

</style>
