<script setup>

</script> 

<template>
   <footer>
    <img class="logored" src="../../assets/images/logo-red-lg.svg" alt="Logo-Red">
    <h2>Escala el potencial de tu empresa</h2>
    <p class="copy-text">phantera hub ©2024</p>
    <p class="terminos-text">Tratamiento de Datos Personales en los términos de la Política de Privacidad y Protección de Datos Personales. Aviso de privacidad y política de cookies.</p>
    <div class="socialmedia">
        <img src="../../assets/images/facebook.png" alt="Facebook">
        <img src="../../assets/images/instagram.png" alt="Instragram">
        <img src="../../assets/images/x.png" alt="X">
        <img src="../../assets/images/youtube.png" alt="Youtube">
    </div>
   </footer> 
</template>

<style scoped>


footer{
    background-color: white; 
    border-bottom: 8px solid #f51053;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: flex-start;
    padding: 6rem 7rem;
    color: black;
}

.logored{
width: 80px;
height: auto;
margin-bottom: 20px;
}

h2{
    text-transform: uppercase;
    font-weight: 800;
}

.copy-text{
    color: #f41052;
    text-transform: uppercase;
}

.terminos-text{
    font-size: 12px;
    color: black;
    width: 25.6rem; 
    overflow-wrap: break-word; 
}

.socialmedia img{
    height: 20px;
    margin-right: 18px;
}

@media (max-width: 768px){
    footer{
    border-bottom: 8px solid #f51053;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: flex-start;
    padding: 6rem 1rem;
    color: black;
}

.logored{
width: 60px;
}

h2{
font-size: 20px;
}

.terminos-text{
    width: 22rem; 

}

}
</style>
