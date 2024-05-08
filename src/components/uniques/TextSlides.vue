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
                <p><b>{{t.textcustom1}}</b> {{t.textcustom2}} <b>{{t.textcustom3}}</b> {{t.textcustom4}}</p>                  
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="text-center">
                <h2>{{t.textcustom5}}</h2>
                <p>{{t.textcustom6}}</p>                  
                </div> 
            </swiper-slide>

            <swiper-slide>    
                <div class=" text-center">
                <h2>{{t.textcustom7}}</h2>
                <p>{{t.textcustom8}}</p>                  
                </div> 
                                
            </swiper-slide>

            <swiper-slide>    
                <div class="text-center">
                <h2>{{t.textcustom9}}</h2>
                <p>{{t.textcustom10}}</p>                  
                </div> 
                                
            </swiper-slide>

            <swiper-slide>    
                <div class="text-center">
                
                <h2>{{t.textcustom11}}</h2>
                <p>{{t.textcustom12}}</p>                  
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