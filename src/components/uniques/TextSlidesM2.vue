<script setup>


</script> 

<template>    
    <div class="container contenedor">
        <swiper-container
            slides-per-view="1"
            space-between="10"
            :pagination="{
                clickable:true,
            }" 
            speed="500"
            loop="true"
            >
        
            <swiper-slide>
                <div class=" text-center">
                <p>Una estrategia centrada en el crecimiento capitaliza oportunidades, optimizando canales digitales, personalizando comunicación y analizando datos para asegurar rendimiento óptimo y crecimiento sostenido en un mercado competitivo.</p>                  
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="text-center">
                <h2>Comprensión y segmentación del cliente</h2>
                <p>Entender profundamente a la audiencia del nuestro cliente para personalizar los esfuerzos de marketing de manera efectiva.</p>                  
                </div> 
            </swiper-slide>

            <swiper-slide>    
                <div class=" text-center">
                <h2>Enfoque integrado en múltiples canales </h2>
                <p> Utilizar una combinación de canales digitales (SEM, SEO, Redes Sociales, Paid Media y landing pages) para un alcance integral.</p>                  
                </div> 
                                
            </swiper-slide>  

            <swiper-slide>    
                <div class=" text-center">
                <h2>Toma de decisiones basada en datos</h2>
                <p>Aprovechar el análisis de datos para informar la estrategia y medir el éxito.</p>                  
                </div> 
                                
            </swiper-slide>        
                        
        </swiper-container>
    </div>
    
</template>

<style scoped>
.contenedor{
    padding: 6rem 0rem; 
}

h2{
    text-transform: capitalize;
    font-weight: 700;
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