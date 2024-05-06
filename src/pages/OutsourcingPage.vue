<script setup>
import Contact from '@/components/generals/Contact.vue'
import VideoOutsourcing from '@/components/uniques/ContentOutsourcing.vue'

const backgroundcolor='contenedorblanco'
const placeholder="placeholderblanco"
const textocolor="colortextoblanco"
const labelcolor="labelcolorblanco"
const checkboxcolor="checkcolorblanco"
</script>

<template>
<VideoOutsourcing/>
<Contact :backgroundcolor="backgroundcolor" :placeholdercolor="placeholder" :textocolor="textocolor" :labelcolor="labelcolor" :checkboxcolor="checkboxcolor"/>
</template>

<style scoped>

</style>
