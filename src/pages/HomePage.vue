<script setup>
import Hero from '../components/uniques/Hero.vue'
import Cards from '../components/uniques/Cards.vue'
import LogosSlides from '../components/uniques/LogosSlides.vue'
import VideoHome from '../components/uniques/VideoHome.vue'
import TypeText from '../components/uniques/TypeText.vue'
import SwipeSection from '../components/uniques/SwipeSection.vue'
import Contact from '../components/generals/Contact.vue'


const backgroundcolor='contenedorazul'
const placeholder="placeholderazul"
const textocolor="colortextoazul"
const labelcolor="labelcolorbazul"
const checkboxcolor="checkcolorazul"

</script> 
 
<template> 
    <Hero/> 
    <Cards/> 
    <LogosSlides/>
    <VideoHome UrlDesktopVideo="/src/assets/videos/home-desktop.mp4" UrlMobVideo="/src/assets/videos/Home-Mobile.mp4"/>
    <TypeText/>
    <SwipeSection/>
    <Contact :backgroundcolor="backgroundcolor" :placeholdercolor="placeholder" :textocolor="textocolor" :labelcolor="labelcolor" :checkboxcolor="checkboxcolor"/>
</template>

<style scoped>

</style>
