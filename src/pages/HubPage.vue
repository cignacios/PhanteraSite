<script setup>
import VideoHome from '@/components/uniques/VideoHome.vue';
import CardsHub from '@/components/uniques/CardsHub.vue';

const HubVideo = 'src/assets/videos/Hub-Video.mp4'
const HubVideoMob = 'src/assets/videos/Hub-Mobile.mp4'
</script>

<template>
   <VideoHome :UrlDesktopVideo="HubVideo" :UrlMobVideo="HubVideoMob"/>
   <h1>maximizamos el valor de las organizaciones</h1> 
   <CardsHub/>
</template>

<style scoped lang="scss">
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
