<script setup>


</script> 
 
<template>
    <div class="contenedor"> 
        <h1>Diseño estratégico de marca</h1>
       
       

        
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../../assets/images/b-1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="../../assets/images/b-2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="../../assets/images/b-3.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
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
