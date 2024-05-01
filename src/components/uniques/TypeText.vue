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
}

.titulo{
    font-size: 5rem;
}

.descripcion{
    font-size: 1.25rem;
    text-transform: uppercase;
}
</style>