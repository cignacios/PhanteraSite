<script setup>
import Navbar from './components/generals/Navbar.vue'
import Footer from './components/generals/Footer.vue'
import { RouterView } from "vue-router";
</script>

<template>
    <Navbar/>
    <RouterView/>
    <Footer/>
</template>

<style scoped>

</style>
