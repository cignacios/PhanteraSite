<script setup>
import Hero from '../components/uniques/Hero.vue'
import Cards from '../components/uniques/Cards.vue'
import LogosSlides from '../components/uniques/LogosSlides.vue'
import VideoHome from '../components/uniques/VideoHome.vue'
import TypeText from '../components/uniques/TypeText.vue'
import SwipeSection from '../components/uniques/SwipeSection.vue'
import Contact from '../components/generals/Contact.vue'

const HomeDesktop = '../assets/home-desktop.mp4'
const HomeMobile = '../assets/Home-Mobile.mp4'
</script> 

<template>
    <Hero/> 
    <Cards/> 
    <LogosSlides/>
    <VideoHome :UrlDesktopVideo="HomeDesktop" :UrlMobVideo="HomeMobile"/>
    <TypeText/>
    <SwipeSection/>
    <Contact/>
</template>

<style scoped>

</style>
