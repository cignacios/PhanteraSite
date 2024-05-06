<script setup>


</script> 
 
<template>
    <div class="contenedor"> 
        <h1>Desarrollo de software a la medida y automatización</h1>
        <video class="d-none d-md-block" src="../../assets/videos/Custom-Desktop.mp4" autoplay muted loop></video>
        <video class="d-block d-sm-none" src="../../assets/videos/Custom-Mobile.mp4" autoplay muted loop></video>
        </div>

</template>

<style scoped>
.contenedor{
    padding-top: 90px;
    padding-bottom: 3rem;
    position: relative;
    text-align: center;
}

video{
    width: 100%;
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
    width: 20rem;
    overflow-wrap: break-word;
}

}

</style>
