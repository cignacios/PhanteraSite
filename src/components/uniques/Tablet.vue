<script setup>
import {t} from '../../locale/language'


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
                <p><b>{{t.textslide1}}</b> {{t.textslide2}}</p>
                <p class="sub-titulo">{{t.textslide3}} <b>{{t.textslide4}}</b> {{t.textslide5}} <b>SEO</b> {{t.textslide6}}</p>                
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="row align-items-center text-center">
                  <h2 class="titulo2">{{t.textslide7}}</h2>
                  <p>{{t.textslide8}}</p>                  
                </div> 
            </swiper-slide>

            <swiper-slide>    
                <div class="row align-items-center">
                  <h2 class="titulo3">{{t.textslide9}}</h2>
                  <p>{{t.textslide10}}</p>                  
                </div> 
                                
            </swiper-slide>

            <swiper-slide>    
                <div class="row align-items-center">
                  <h2 class="titulo4">{{t.textslide11}}</h2>
                  <p>{{t.textslide12}}</p>                  
                </div> 
                                
            </swiper-slide>

            <swiper-slide>    
                <div class="row align-items-center"> 
                  <h2 class="titulo5">{{t.textslide13}}</h2>
                  <p>{{t.textslide14}}</p>                  
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
