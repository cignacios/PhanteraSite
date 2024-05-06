<script setup>
import VideoCustom from '@/components/uniques/VideoCustom.vue'
import TextSlides from '@/components/generals/TextSlides.vue'
import Contact from '@/components/generals/Contact.vue'

const backgroundcolor='contenedorblanco'
const placeholder="placeholderblanco"
const textocolor="colortextoblanco"
const labelcolor="labelcolorblanco"
const checkboxcolor="checkcolorblanco"
</script> 
 
<template>
<VideoCustom/>
<TextSlides/>
<Contact :backgroundcolor="backgroundcolor" :placeholdercolor="placeholder" :textocolor="textocolor" :labelcolor="labelcolor" :checkboxcolor="checkboxcolor"/>
</template>

<style scoped>

</style>
