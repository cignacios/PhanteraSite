<script setup>


</script> 
 
<template>
    <div class="contenedor">
        <h1>Subcontratación de software</h1>
        <p class="text-center"><b>Accede a expertos globales</b> sin los costos de expasión interna. Desde desarrollo hasta soporte, <b>garantizamos soluciones</b> de calidad alineadas con tus objetivos. Escala según necesites, enfócate en tu negocio principal.</p>
        
    <div class="container p-4">
    <div class="d-grid parent">
    
        <div class="card">
            <div class="card-body p-0">
            <img src="../../assets/images/card-1.webp" alt="..." class="img-fluid"/>
            <h5 class="card-title">Acceso a expertos globales</h5>
            <p class="card-text">Amplía tu equipo con talento especializado en tecnología sin el coste de contratación directa.</p>
            
            </div>
        </div>
   
   
        <div class="card">
            <div class="card-body p-0">
            <img src="../../assets/images/card-2.webp" alt="..." class="img-fluid"/>
            <h5 class="card-title">Costo-eficiencia</h5>
            <p class="card-text">Reduce significativamente los costos operativos y de desarrollo al aprovechar la subcontratación.</p>
            
            </div>
        </div>
    
        <div class="card">
            <div class="card-body p-0">
            <img src="../../assets/images/card-3.webp" alt="..." class="img-fluid"/>
            <h5 class="card-title">Flexibilidad y escalabilidad</h5>
            <p class="card-text">Ajusta fácilmente el tamaño de tu equipo de desarrollo según las necesidades del proyecto.</p>
            
            </div>
        </div>
    
        <div class="card">
            <div class="card-body p-0">
            <img src="../../assets/images/card-4.webp" alt="..." class="img-fluid"/>
            <h5 class="card-title">Enfoque en el core bussiness</h5>
            <p class="card-text">Libera recursos internos para que puedas concentrarte en las áreas clave de tu negocio, mientras nosotros nos ocupamos del desarrollo tecnológico.</p>
        </div>
        </div>
   
  </div>
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
    font-weight: 800; 
    padding: 3rem 0rem;
}

p{
    font-size: 1.25rem;
    width: 65rem;
    overflow-wrap: break-word;
    margin: 0 auto;
}


.container-fluid{
    padding: 0rem 17rem;
}

.parent{

grid-template-columns: repeat(4, minmax(260px, 1fr)) !important;
grid-template-rows: 1fr;
grid-column-gap: 10px;
grid-row-gap: 0px;
overflow: auto;
}
 
.card{
    border: 0px !important;
}

.card-body{
    overflow: hidden;
    
}

.card-title{
    position: absolute;
    top: 23px;
    left: 0;
    color: white;
    padding: 1rem;
    font-size: 2rem;
    font-weight: 700;
    text-align: left;
}

.card-text{
    position: absolute;
    top: 30%;
    color: white;
    padding: 1rem;
    font-size: 1.35rem;
    left: 100%;
    transition: left 0.3s ease;
    width: 100%;
    text-align: left;
}

.card-body:hover .card-text{
left: 1%;
color: white;

}

.parent .card:last-child .card-body .card-text{
    color: transparent;
}

.parent .card:last-child:hover .card-body .card-text{
    color: white;
}

img{
    transition: transform 0.3s ease;
}

.card:hover img{
  transform: scale(1.3); 
  filter: blur(5px);
}

@media (max-width: 768px){

h1{ 
font-size: 2rem;
width: 22rem;
overflow-wrap: break-word;
}

p{
width: 23rem;
overflow-wrap: break-word;
margin: 0 auto;
} 

.card-text{
        top: 41%;
        font-size: 1.25rem;
        line-height: 1.3rem;
}

}

@media (min-width: 1200px){
    .parent{
        grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)) !important;
        overflow: visible;
        
}

.container-fluid{
    padding: 1rem 0rem;
}

}

</style>
