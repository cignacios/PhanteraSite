<script setup>
import {t} from '../../locale/language'
</script>

<template>
    <header class="fondotexto">
        <h1>{{t.hero1}} <br class="d-block d-sm-none"> {{t.hero2}}<br class="d-none d-lg-block">{{t.hero3}}<br class="d-block d-sm-none">{{t.hero4}}</h1>
        <h3>{{t.hero5}}</h3>
    </header>
  
   
</template>

<style scoped>
.fondotexto{
   padding-top: 15rem;
    padding-bottom: 10rem;
}

h1{
    font-size: 5rem;
    font-weight: 700;
}

h1, h3{
    text-align: center;
    text-transform: uppercase;
}

@media (max-width: 768px){
.fondotexto{
    padding-top: 10rem;
    padding-bottom: 5rem;
}
h1{
    font-size: 2.5rem;
}

h3{
    font-size: 1rem;
}
}
</style>