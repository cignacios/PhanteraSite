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
                <p>El proceso <b>crea identidades de marcas coherentes</b> mediante estrategia y creatividad. incluye análisis, diseño visual comunicación y mantenimiento.</p>                  
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="text-center">
                <h2>Identidad visual</h2>
                <p>Incluye elementos como el logotipo, la paleta de colores y la tipografía, que juntos crean una imagen coherente y reconocible de la marca.</p>                  
                </div> 
            </swiper-slide>

            <swiper-slide>    
                <div class=" text-center">
                <h2>consistencia y coherencia de la marca</h2>
                <p>Asegura que todos los aspectos de la marca, desde el marketing hasta el embalaje y la publicidad, mantengan un estilo y mensaje uniformes que reflejen los valores y la personalidad de la marca.</p>                  
                </div> 
                                
            </swiper-slide>  

            <swiper-slide>    
                <div class=" text-center">
                <h2>Estrategia de posicionamiento de marca</h2>
                <p>Define cómo la marca se diferencia de sus competidores y cómo se posiciona en la mente de los consumidores. Incluye la propuesta de valor, el tono de voz y la personalidad de la marca.</p>                  
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