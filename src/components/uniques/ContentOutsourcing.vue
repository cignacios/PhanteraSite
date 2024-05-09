<script setup>
import {t} from '../../locale/language'

</script> 
 
<template>
    <div class="contenedor">
        <h1>{{t.titulooutsourcing}}</h1>
        <p class="text-center mb-4"><b>{{t.textoursourcing1}}</b> {{t.textoursourcing2}} <b>{{t.textoursourcing3}}</b> {{t.textoursourcing4}}</p>
        
    <div class="container p-4">
    <div class="d-grid parent"> 
    
        <div class="card">
            <div class="card-body p-0">
            <img src="../../assets/images/card-1.webp" alt="..." class="img-fluid"/>
            <h5 class="card-title">{{t.textoursourcing5}}</h5>
            <p class="card-text">{{t.textoursourcing6}}</p>
            
            </div>
        </div>
   
   
        <div class="card">
            <div class="card-body p-0">
            <img src="../../assets/images/card-2.webp" alt="..." class="img-fluid"/>
            <h5 class="card-title">{{t.textoursourcing7}}</h5>
            <p class="card-text">{{t.textoursourcing8}}</p>
            
            </div>
        </div>
    
        <div class="card">
            <div class="card-body p-0">
            <img src="../../assets/images/card-3.webp" alt="..." class="img-fluid"/>
            <h5 class="card-title">{{t.textoursourcing9}}</h5>
            <p class="card-text">{{t.textoursourcing10}}</p>
            
            </div>
        </div>
    
        <div class="card">
            <div class="card-body p-0">
            <img src="../../assets/images/card-4.webp" alt="..." class="img-fluid"/>
            <h5 class="card-title">{{t.textoursourcing11}}</h5>
            <p class="card-text">{{t.textoursourcing12}}</p>
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
    font-weight: 700; 
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
