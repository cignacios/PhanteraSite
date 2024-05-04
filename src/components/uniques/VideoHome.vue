<script setup>
defineProps({
    UrlDesktopVideo:{
        type:String, require:true
    }, UrlMobVideo:{
        type:String, require:true
    }
})



</script>

<template>
<div class="contenedor"> 
    <video class="d-none d-md-block" :src="UrlDesktopVideo" autoplay muted loop></video>
    <video class="d-block d-sm-none" :src="UrlMobVideo" autoplay muted loop></video>
</div>
</template>

<style scoped> 
.contenedor{
    margin-bottom: 3rem;
}

video{
    width: 100%;
}
 
</style>