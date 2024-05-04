<script setup>
import VideoHub from '@/components/uniques/VideoHub.vue';
import CardsHub from '@/components/uniques/CardsHub.vue';
import SlidesHub from '@/components/uniques/SlidesHub.vue'
import Contact from '@/components/generals/Contact.vue'
</script>

<template>
    <div class="contenedor">
    <VideoHub/>
   <h1>maximizamos el valor de las organizaciones</h1> 
    </div>
     <CardsHub/>
     <SlidesHub/>
   <Contact/>
</template>

<style scoped lang="scss">
.contenedor{
    position: relative;
}

h1{
    text-transform: uppercase;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 5rem;
    font-weight: bolder;
}
 
@media (max-width: 768px){
    h1{
    font-size: 2rem;
   
}
}
</style>
