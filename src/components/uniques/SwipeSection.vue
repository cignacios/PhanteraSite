<script>
import {t} from '../../locale/language'
console.log(t.texto1.value) 
</script> 

<template>
<div class="slidecontenedor-fluid ">
        <swiper-container
            slides-per-view="1"
            space-between="10"
            :pagination="{
                clickable:true,
            }"
            speed="500"
            loop="true"
            :breakpoints="{ 
              '576': {
                slidesPerView:2
              },  
              '768':{
                slidesPerView:3 
              },
              '992':{
                slidesPerView:5 
              }
            }"
        >
            
            <swiper-slide >
                <div class="slidecontenedor">
                    <div class="row align-items-center">
                    <div class="col-md-6 img-contenedor">
                        <img src="../../assets/images/efipay-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 textos">
                        <h3 class="mb-2 text-capitalize">Efipay</h3>
                        <p class="mb-3">{{t.texto1}}</p>
                        <button type="button" class="btn btn-outline-light">{{t.btnswipes}}</button>
                    </div>
                    </div> 
                </div>
                
                 
            </swiper-slide>

            <swiper-slide>
                <div class="slidecontenedor">
                    <div class="row align-items-center">
                    <div class="col-md-6 img-contenedor">
                        <img src="../../assets/images/uala-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 textos">
                        <h3 class="mb-2  text-capitalize">Ualá</h3>
                        <p class="mb-3">{{t.texto2}}</p>
                        <button type="button" class="btn btn-outline-light">Ver más</button>
                    </div>
                </div>
                </div>

            </swiper-slide>

            <swiper-slide>    
                <div class="slidecontenedor">
                    <div class="row align-items-center">
                    <div class="col-md-6 img-contenedor">
                        <img src="../../assets/images/levely-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 textos">
                        <h3 class="mb-2  text-capitalize">Levely</h3>
                        <p class="mb-3">{{t.texto3}}</p>
                        <button type="button" class="btn btn-outline-light">Ver más</button>
                    </div>
                </div>
                </div>
               

                
            </swiper-slide>

            <swiper-slide>
                <div class="slidecontenedor">
                    <div class="row align-items-center">
                    <div class="col-md-6 img-contenedor">
                        <img src="../../assets/images/klipclub-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 textos">
                        <h3 class="mb-2  text-capitalize">Klipclub</h3>
                        <p class="mb-3">{{t.texto4}}</p>
                        <button type="button" class="btn btn-outline-light">Ver más</button>
                    </div>
                </div> 
                </div>

            </swiper-slide>

            
            <swiper-slide>
                <div class="slidecontenedor">
                    <div class="row align-items-center">
                    <div class="col-md-6 img-contenedor">
                        <img src="../../assets/images/accedo-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 textos">
                        <h3 class="mb-2  text-capitalize">Accedo</h3>
                        <p class="mb-3">{{t.texto5}}</p>
                        <button type="button" class="btn btn-outline-light">ver más</button>
                    </div>
                </div> 
                </div>
                
            </swiper-slide>

            <swiper-slide>
                <div class="slidecontenedor">
                    <div class="row align-items-center">
                    <div class="col-md-6 img-contenedor">
                        <img src="../../assets/images/alltruismo-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 textos">
                        <h3 class="mb-2  text-capitalize">Alltruismo</h3>
                        <p class="mb-3">{{t.texto6}}</p>
                        <button type="button" class="btn btn-outline-light">Ver más</button>
                    </div>
                </div>
                </div>
                
     
            </swiper-slide>

            <swiper-slide>
                <div class="slidecontenedor">
                    <div class="row align-items-center">
                    <div class="col-md-6 img-contenedor">
                        <img src="../../assets/images/yoteayudo-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 textos">
                        <h3 class="mb-2  text-capitalize">Yateayudo</h3>
                        <p class="mb-3">{{t.texto7}}</p>
                        <button type="button" class="btn btn-outline-light">Ver más</button>
                    </div>
                </div>
                </div>
                
            </swiper-slide>

           
            <swiper-slide>
                <div class="slidecontenedor">
                    <div class="row align-items-center">
                    <div class="col-md-6 img-contenedor">
                        <img src="../../assets/images/inglesdeuna-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 textos">
                        <h3 class="mb-2  text-capitalize">Ingles De Una</h3>
                        <p class="mb-3">{{t.texto8}}</p>
                        <button type="button" class="btn btn-outline-light">Ver más</button>
                    </div>
                </div> 
                </div>

            </swiper-slide>
            
            <swiper-slide>
                    <div class="slidecontenedor">
                        <div class="row align-items-center">
                        <div class="col-md-6 img-contenedor">
                            <img src="../../assets/images/tutrok-view-work.png" alt="..." style="" class="img-fluid"/>
                        </div>
                        <div class="col-md-6 textos">
                            <h3 class="mb-2  text-capitalize">Tutrok</h3>
                            <p class="mb-3">{{t.texto9}}</p>
                            <button type="button" class="btn btn-outline-light">Ver más</button>
                        </div>
                    </div>
                </div>
                
            </swiper-slide> 
        

            </swiper-container>
        </div>
</template>

<style scoped>
.slidecontenedor-fluid{
    padding: 8rem 0rem;
}

.textos{
    text-align: left;
}

.img-contenedor{
    text-align: center;
}

.swiper-pagination-bullet{
    margin-top: 15rem !important;
    background-color: green !important;
}

.btn-outline-light{
    border: 2px solid #788ee8;
    color:#788ee8;
}

.btn-outline-light:hover{
    background-color: hsla(0, 0%, 100%, 0.87);
}


@media (max-width: 768px){
.textos{
    text-align: center;
}

.col-md-6 img{
max-width: 250px;
}

}
</style>
