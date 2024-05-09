<script setup>
import {t} from '../../locale/language'


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
                <p>{{t.textmarketing1}}</p>                  
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="text-center">
                <h2>{{t.textmarketing2}}</h2>
                <p>{{t.textmarketing3}}</p>                  
                </div> 
            </swiper-slide>

            <swiper-slide>    
                <div class=" text-center">
                <h2>{{t.textmarketing4}}</h2>
                <p>{{t.textmarketing5}}</p>                  
                </div> 
                                
            </swiper-slide>  

            <swiper-slide>    
                <div class=" text-center">
                <h2>{{t.textmarketing6}}</h2>
                <p>{{t.textmarketing7}}</p>                  
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