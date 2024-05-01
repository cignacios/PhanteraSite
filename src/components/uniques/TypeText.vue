<script setup>
import VueTypewriterEffect from "vue-typewriter-effect";
</script>

<template>
    <div class="container text-center micontenedor">
        <vue-typewriter-effect class="text-uppercase fw-bold titulo" :strings="['conectamos contigo y tus clientes']" />
        <p class="descripcion">No serás solo otro número; analizaremos tu negocio para ofrecerte una <br> solución hacia el exito.</p>
    </div>
</template>

<style scoped>

.micontenedor{
    max-width: 52% !important;
    margin-bottom: 50px
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
}

.titulo{
    font-size: 2rem;
}

.descripcion{
    margin-top: 4rem;
}

}
</style>