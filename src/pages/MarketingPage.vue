<script setup>
import VideoMarketing from '@/components/uniques/VideoMarketing.vue'
import TextSlidesMarketing from '@/components/uniques/TextSlidesM2.vue';
import Contact from '@/components/generals/Contact.vue'

const backgroundcolor='contenedorblanco'
const placeholder="placeholderblanco"
const textocolor="colortextoblanco"
const labelcolor="labelcolorblanco"
const checkboxcolor="checkcolorblanco"
</script> 
 
<template>
<VideoMarketing/>
<TextSlidesMarketing/>
<Contact :backgroundcolor="backgroundcolor" :placeholdercolor="placeholder" :textocolor="textocolor" :labelcolor="labelcolor" :checkboxcolor="checkboxcolor"/>
</template>

<style scoped>

</style>
