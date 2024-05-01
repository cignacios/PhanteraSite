<script setup>
import { VueMarqueeSlider } from 'vue3-marquee-slider';
import '../../../node_modules/vue3-marquee-slider/dist/style.css'
</script>

<template>
    <div class="marquee">
        <vue-marquee-slider 
  id="marquee-slider-space"
  :space="50"
  :speed="7000"
  :autoWidth=true
>
            <img class="img-fluid" src="../../assets/images/accedo.png" alt="">
            <img class="img-fluid" src="../../assets/images/alltruismo.png" alt="">
            <img class="img-fluid" src="../../assets/images/atg.png" alt="">
            <img class="img-fluid" src="../../assets/images/cfs.png" alt="">
            <img class="img-fluid" src="../../assets/images/efipay.png" alt="">
            <img class="img-fluid" src="../../assets/images/ingles-de-una.png" alt="">
            <img class="img-fluid" src="../../assets/images/klipclub.png" alt="">
            <img class="img-fluid" src="../../assets/images/levely.png" alt="">
            <img class="img-fluid" src="../../assets/images/tutrok.png" alt="">
            <img class="img-fluid" src="../../assets/images/uala.png" alt="">
            <img class="img-fluid" src="../../assets/images/ya-te-ayudo.png" alt="">

</vue-marquee-slider>
    </div>

</template>


<style scoped>
.marquee{
    padding: 7rem 0rem;
}
 
.img-fluid{
height: 50px !important;

}

@media (min-width: 768px){
.img-fluid{
height:auto;

}

}
</style>
