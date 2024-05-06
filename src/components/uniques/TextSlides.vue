<script setup>


</script> 

<template>    
    <div class="container contenedor">
        <swiper-container
            slides-per-view="1"
            space-between="10"
            pagination="true" 
            speed="500"
            loop="true"
            >
        
            <swiper-slide>
                <div class=" text-center">
                <p><b>Transformamos</b> procesos con tenología metodologías ágiles ofreciendo <b>soluciones personalizadas</b> que impulsan la eficiencia y productivad empresarial.</p>                  
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="text-center">
                <h2>Incremento en ventas online</h2>
                <p>Las plataformas de e-commerce están diseñadas para facilitar el proceso de compra, lo que resulta en un aumento de las ventas</p>                  
                </div> 
            </swiper-slide>

            <swiper-slide>    
                <div class=" text-center">
                <h2>Visibilidad mejorada</h2>
                <p>Con SEO y un diseño web responsivo, tu sitio web ganará visibilidad, atrayendo a más visitantes</p>                  
                </div> 
                                
            </swiper-slide>

            <swiper-slide>    
                <div class="text-center">
                <h2>Engagement del usuario</h2>
                <p>A través de un diseño interactivo y contenido relevante, fomentos la participación del usuario, mejorando las tasas de retención.</p>                  
                </div> 
                                
            </swiper-slide>

            <swiper-slide>    
                <div class="text-center">
                
                <h2>Gestión eficiente</h2>
                <p>Nuestros sistemas permiten una gestión fácil de contenido y productos, simplificando las operaciones diarias.</p>                  
                </div> 
            </swiper-slide>            
                        
        </swiper-container>
    </div>
    
</template>

<style scoped>
.contenedor{
    padding: 5rem 0rem;
}

h2{
    text-transform: capitalize;
}

p{
    font-size: 1.25rem;
} 

@media (max-width: 768px){
    p{
        padding: 1rem;
    }
}
</style>