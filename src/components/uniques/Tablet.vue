<script setup>


</script> 
 
<template>
    <div class="contenedorprincipal">
        <div class="container">
    <div class="row align-items-end">
        <div class="col-md-9">
            <div class="contenedor">

                <img class=" back" src="../../assets/images/screenshotHomePage.png" alt=""/>
            </div>
                
                       
        </div>

        <div class="col-md-3">
            <div class="contenedorslides">
        <swiper-container
            slides-per-view="1"
            :pagination="{
                clickable:true,
            }"
            space-between="10"
            speed="500"
            loop="true" 
        >
        
            <swiper-slide>
                <div class="row align-items-center">
                <p><b>Diseñamos</b> sitios web atractivos y optimazados para conversión</p>
                <p class="sub-titulo">Desde e-coomerce hasta portales informativos, priorizamos la <b>usabilidad</b> y el <b>SEO</b> para destacar tu marca en línea.</p>                
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="row align-items-center text-center">
                  <h2 class="titulo2">Incremento en ventas online</h2>
                  <p>Las plataformas de e-ccomerce estan diseñadas para facilitar el proceso de compra, lo que resulta en un aumento de las ventas.</p>                  
                </div> 
            </swiper-slide>

            <swiper-slide>    
                <div class="row align-items-center">
                  <h2 class="titulo3">Visibilidad mejorada</h2>
                  <p>Con SEO y un diseño web responsivo, tu sitio web ganará visibilidad, atrayendo a más visitantes.</p>                  
                </div> 
                                
            </swiper-slide>

            <swiper-slide>    
                <div class="row align-items-center">
                  <h2 class="titulo4">Engagement del usuario</h2>
                  <p>A través de un diseño interactivo y contenido relevante, fomentamos la participación del usuario, mejorando las tasas de retención.</p>                  
                </div> 
                                
            </swiper-slide>

            <swiper-slide>    
                <div class="row align-items-center"> 
                  <h2 class="titulo5">Gestión eficiente</h2>
                  <p>Nuestros sistemas permiten una gestión fácil de contenido y de los productos, simplificando las operaciones diarias.</p>                  
                </div> 
                                
            </swiper-slide>


            </swiper-container>
        </div>
        </div>
       
    
        </div>

    </div>
    </div>


</template> 

<style scoped>
.contenedorprincipal{
    padding: 9rem 0rem;
}


.contenedor{
    width: 100%;
    height: 600px;
    position: relative;
    overflow: auto;
    box-shadow: 3px 9px 20px 0px rgba(0,0,0,0.56);
    border-radius: 30px;

}

.back{
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    left: 0%;
    border-radius: 20px;
    
}

::-webkit-scrollbar{
    display: none;
}

p{
    font-size: 1.2rem;
    text-align: left;
    margin-top: 2rem;
}

.titulo2{
    text-transform: capitalize;
    color: #f41052;
    font-weight: 700;
    font-size: 2.25rem;
    text-align: left;
}

.titulo3{
    text-transform: capitalize;
    color: #0ae57f;
    font-weight: 700;
    font-size: 2.25rem;
    text-align: left;
}

.titulo4{
    text-transform: capitalize;
    color: #5911f2;
    font-weight: 700;
    font-size: 2.25rem;
    text-align: left;
}

.titulo5{
    text-transform: capitalize;
    color: #b008ae;
    font-weight: 700;
    font-size: 2.25rem;
    text-align: left;
}

.contenedorslides{
    margin-bottom: 5rem;
    margin-top: 0rem;
}

@media (max-width: 768px){
    .contenedorslides{
    margin-bottom: 2rem;
    margin-top: 5rem;
}
}

</style>
