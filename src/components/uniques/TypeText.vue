<script setup>
import {ref} from 'vue'
import VueTypewriterEffect from "vue-typewriter-effect";
import {t} from '../../locale/language'



//console.log('prueba', {t.typetext})  
</script>

<template>
    <div class="container text-center micontenedor">
        <vue-typewriter-effect class="text-uppercase fw-bold titulo" :strings="[t.typetext]" />
        <p class="descripcion">{{t.descripcion1}}<br>{{t.descripcion2}}</p>
    </div>
</template>

<style scoped> 

.micontenedor{
    max-width: 52% !important;
    margin-bottom: 50px;
    margin-top: 90px;
}

.titulo{
    font-size: 5rem;
}

.descripcion{
    margin-top: 2rem; 
    font-size: 1.25rem;
    text-transform: uppercase;
}

@media (max-width: 768px){

.micontenedor{
    max-width: 100% !important;
    margin-bottom: 10px;
}

.titulo{
    font-size: 2rem;
}

.descripcion{
    margin-top: 4rem;
}

}
</style>