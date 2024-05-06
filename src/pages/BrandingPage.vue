<script setup>
import ContenidoBranding from '@/components/uniques/ContenidoBranding.vue'
import TextSlidesB3 from '@/components/uniques/TextSlidesB.vue';
import Contact from '@/components/generals/Contact.vue'

const backgroundcolor='contenedorblanco'
const placeholder="placeholderblanco"
const textocolor="colortextoblanco"
const labelcolor="labelcolorblanco"
const checkboxcolor="checkcolorblanco"
</script> 
 
<template>
<ContenidoBranding/>
<TextSlidesB3/>
<Contact :backgroundcolor="backgroundcolor" :placeholdercolor="placeholder" :textocolor="textocolor" :labelcolor="labelcolor" :checkboxcolor="checkboxcolor"/>
</template>

<style scoped> 

</style>
     