<script setup>
import {t} from '../../locale/language'

</script> 
 
<template>
    <div class="titulos text-center">
        <h3>{{t.cardshub1}}</h3>
        <p class="sub-titulo text-center">{{t.cardshub2}}</p>
    </div>
       
<div class="container">
        <swiper-container
            slides-per-view="3"
            space-between="20"
            :pagination="{
                clickable:true,
            }"
            speed="500"
            loop="true"
            :breakpoints="{ 
              '576': {
                slidesPerView:3
              },  
              '768':{
                slidesPerView:4
              },
              '992':{
                slidesPerView:6
              }
            }"
        >
        
            <swiper-slide>
                <div class="align-items-center">
                  <img src="../../assets/images/perfil-1.jpg" alt="..." style="" class="img-fluid rounded-2"/>
                  <h5>Simon Garcia</h5>
                  <p>C.E.O</p>                  
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="align-items-center">
                  <img src="../../assets/images/perfil-2.jpg" alt="..." style="" class="img-fluid rounded-2"/>
                  <h5>María González</h5>
                  <p>C.T.O</p>                  
                </div> 
            </swiper-slide>

            <swiper-slide>    
                <div class="align-items-center">
                  <img src="../../assets/images/perfil-3.jpg" alt="..." style="" class="img-fluid rounded-2"/>
                  <h5>Sofía Hernández</h5>
                  <p>Senior Graphic Designer</p>                  
                </div> 
                                
            </swiper-slide>

            <swiper-slide>    
                <div class="align-items-center">
                  <img src="../../assets/images/perfil-4.jpg" alt="..." style="" class="img-fluid rounded-2"/>
                  <h5>Carlos Rodríguez</h5>
                  <p>Software Developer</p>                  
                </div> 
                                
            </swiper-slide>

            <swiper-slide>    
                <div class="align-items-center">
                  <img src="../../assets/images/perfil-1.jpg" alt="..." style="" class="img-fluid rounded-2"/>
                  <h5>Kevin Hernández</h5>
                  <p>Jr Software Developer</p>                  
                </div> 
                                
            </swiper-slide>

            <swiper-slide>    
                <div class="align-items-center">
                  <img src="../../assets/images/perfil-2.jpg" alt="..." style="" class="img-fluid rounded-2"/>
                  <h5>Denisse González</h5>
                  <p>Marketing Manager</p>                  
                </div> 
                                
            </swiper-slide>

            <swiper-slide>    
                <div class="align-items-center">
                  <img src="../../assets/images/perfil-3.jpg" alt="..." style="" class="img-fluid rounded-2"/>
                  <h5>Ana López</h5>
                  <p>Scrum Master</p>                  
                </div> 
                                
            </swiper-slide> 

            <swiper-slide>    
                <div class="align-items-center">
                  <img src="../../assets/images/perfil-4.jpg" alt="..." style="" class="img-fluid rounded-2"/>
                  <h5>Alejandro García</h5>
                  <p>Quality Assurance</p>                  
                </div> 
                                
            </swiper-slide>

             
                
            </swiper-container>
        </div>
</template>

<style scoped lang="scss">
.titulos {
    margin-top: 6rem;
    text-transform: uppercase;

    h3 {
        font-weight: 700;
        font-size: 2rem;
    }

    .sub-titulo {
        font-size: 1.25rem;
        margin-bottom: 3rem;
    }
}

.container {
    padding-bottom: 7rem;

    img {
        height: 100% !important;
        width: 100% !important;
        filter: grayscale(100%);
    }

    h5 {
        text-align: left;
        margin-top: 10px;
    }

    p {
        text-align: left;
    }

    @media (max-width: 768px) {
        img {
            height: 7rem;
            width: 8rem;
        }

        h5 {
            font-size: 1rem;
        }
    }
}


</style> 
