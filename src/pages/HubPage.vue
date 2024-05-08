<script setup>
import VideoHub from '@/components/uniques/VideoHub.vue';
import CardsHub from '@/components/uniques/CardsHub.vue';
import SlidesHub from '@/components/uniques/SlidesHub.vue'
import Contact from '@/components/generals/Contact.vue'
import {t} from '../locale/language'

const backgroundcolor='contenedorazul'
const placeholder="placeholderazul"
const textocolor="colortextoazul"
const labelcolor="labelcolorbazul"
const checkboxcolor="checkcolorazul" 
</script>

<template>
    <div class="contenedor">
    <VideoHub/>
   <h1>{{t.titulohub}}</h1> 
   <div class="overlay"></div>
    </div>
     <CardsHub/>
     <SlidesHub/>
     <Contact :backgroundcolor="backgroundcolor" :placeholdercolor="placeholder" :textocolor="textocolor" :labelcolor="labelcolor" :checkboxcolor="checkboxcolor"/>
</template>

<style scoped lang="scss">
.contenedor{
    position: relative;
}

h1{
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 5rem;
    font-weight: bolder;
}

.overlay{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,3,21,0.9164040616246498) 0%, rgba(0,3,21,0.00043767507002800965) 24%, rgba(0,3,21,0) 54%, rgba(0,3,21,0.9808298319327731) 100%);
}

 
@media (max-width: 768px){
    h1{
    font-size: 2rem;
   
}
}
</style>
