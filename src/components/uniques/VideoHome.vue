<script setup>
const props = defineProps(['UrlDesktopVideo', 'UrlMobVideo'])
console.log("props", props)


</script>

<template>
<div class="contenedor"> 
    <video class="d-none d-md-block" :src="props.UrlDesktopVideo" autoplay muted loop></video>
    <video class="d-block d-sm-none" :src="props.UrlMobVideo" autoplay muted loop></video>
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