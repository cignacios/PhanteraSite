<script setup>


</script> 
 
<template>
    <div class="contenedor"> 
        <h1>Diseño estratégico de marca</h1>
            <swiper-container
            slides-per-view="1"
            space-between="10"
            :modules="modules"
            :pagination="{
                clickable:true,
            }"
            speed="500"
            loop="true"
            
        >
        
            <swiper-slide class="p-4">
                <img src="../../assets/images/b-1.jpg" alt="..." style="" class="img-fluid rounded-4"/>
            </swiper-slide>

            <swiper-slide>
                  <img src="../../assets/images/b-2.jpg" alt="..." style="" class="img-fluid rounded-4"/>        
            </swiper-slide>

            <swiper-slide>    
                  <img src="../../assets/images/b-3.jpg" alt="..." style="" class="img-fluid rounded-4"/>                
            </swiper-slide>

        </swiper-container>
        </div>

</template>

<style scoped>
.contenedor{
    padding-top: 90px; 
    padding-bottom: 3rem;
    position: relative;
    text-align: center;
}

h1{ 
    text-transform: uppercase;
    margin: 0 auto;
    font-size: 3.3rem;
    font-weight: 900;
    width: 74rem;
    overflow-wrap: break-word;
    padding: 3rem 0rem;
}

@media (max-width: 768px){

    h1{ 
    font-size: 2rem;
    width: 22rem;
    overflow-wrap: break-word;
}

}

</style>
