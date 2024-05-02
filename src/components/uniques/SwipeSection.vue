<script>
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange, 
      modules:[Pagination, A11y]
    }
}
}
</script> 

<template>
<div class="container-fluid ">
        <swiper 
        :modules="modules"
        :slides-per-view="3"
            :space-between="10"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="../../assets/images/efipay-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 ">
                        <h3 class="mb-2 text-start text-capitalize">Efipay</h3>
                        <p class="mb-3">Es una solución innovadora diseñada para simplificar agilizar los pagos en cualquier tipo de transa...</p>
                        <button type="button" class="btn btn-outline-light">Light</button>
                    </div>
                </div> 
                
            </swiper-slide>

            <swiper-slide>

                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="../../assets/images/uala-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 ">
                        <h3 class="mb-2 text-start text-capitalize">Ualá</h3>
                        <p class="mb-3">Adaptaciones gráficas y audiovisuales para el público colombiano, se tomo la esencia de cada product...</p>
                        <button type="button" class="btn btn-outline-light">Light</button>
                    </div>
                </div>

                
            </swiper-slide>

            <swiper-slide>    
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="../../assets/images/levely-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 ">
                        <h3 class="mb-2 text-start text-capitalize">Levely</h3>
                        <p class="mb-3">Un sistema de gestión de aprendizaje que ayuda a crear una amplia gama de cursos, permitiendo accede...</p>
                        <button type="button" class="btn btn-outline-light">Ver más</button>
                    </div>
                </div>

                
            </swiper-slide>

            <swiper-slide>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="../../assets/images/klipclub-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 ">
                        <h3 class="mb-2 text-start text-capitalize">Klipclub</h3>
                        <p class="mb-3">Plataforma de transmisión digital para eventos relacionados con la música.</p>
                        <button type="button" class="btn btn-outline-light">Ver más</button>
                    </div>
                </div> 

            </swiper-slide>

            
            <swiper-slide>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="../../assets/images/accedo-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 ">
                        <h3 class="mb-2 text-start text-capitalize">Accedo</h3>
                        <p class="mb-3">es un líder ágil y escalable en nearshore para las necesidades de soporte al cliente en inglés, espa...</p>
                        <button type="button" class="btn btn-outline-light">ver más</button>
                    </div>
                </div> 
            </swiper-slide>

            <swiper-slide>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="../../assets/images/alltruismo-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 ">
                        <h3 class="mb-2 text-start text-capitalize">Alltruismo</h3>
                        <p class="mb-3">Plataforma de crowdfunding para organizaciones sin fines de lucro.</p>
                        <button type="button" class="btn btn-outline-light">Light</button>
                    </div>
                </div>
     
            </swiper-slide>

            <swiper-slide>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="../../assets/images/yoteayudo-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 ">
                        <h3 class="mb-2 text-start text-capitalize">Yateayudo</h3>
                        <p class="mb-3">es un líder ágil y escalable en nearshore para las necesidades de soporte al cliente en inglés, espa...</p>
                        <button type="button" class="btn btn-outline-light">Light</button>
                    </div>
                </div>
            </swiper-slide>

           
            <swiper-slide>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="../../assets/images/inglesdeuna-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 ">
                        <h3 class="mb-2 text-start text-capitalize">Ingles De Una</h3>
                        <p class="mb-3">Una aplicación web interactiva para el aprendizaje del inglés, con Moodle y SCORM 1.2, para escuelas...</p>
                        <button type="button" class="btn btn-outline-light">Light</button>
                    </div>
                </div> 
                           
                
            </swiper-slide>
            
            <swiper-slide>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="../../assets/images/tutrok-view-work.png" alt="..." style="" class="img-fluid"/>
                    </div>
                    <div class="col-md-6 ">
                        <h3 class="mb-2 text-start text-capitalize">Tutrok</h3>
                        <p class="mb-3">Plataforma digital y aplicación móvil para el transporte de carga pesada.</p>
                        <button type="button" class="btn btn-outline-light">Light</button>
                    </div>
                </div>
            </swiper-slide>
        

            </swiper>
        </div>
</template>

<style scoped>
.container-fluid{
    padding: 8rem 0rem;
}

</style>
