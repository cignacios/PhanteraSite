<script setup>
import {t} from '../../locale/language'
const props=defineProps({placeholdercolor:String, backgroundcolor:String, textocolor:String, labelcolor:String, checkboxcolor:String});
console.log(props);
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 izquierda order-2 order-lg-1">
                <img class="img-fluid" src="../../assets/images/form-contact-es.png" alt="formulario"/>
            </div>
                <div class="col-lg-6 derecha order-1 order-lg-2">
                    <form :class=" backgroundcolor " class="contenedor-form">
                            <div class="mb-3">
                                <input type="email" class="form-control" :class="[placeholdercolor, textocolor]" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="{{t.placeholder1}}"/> 
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" :class="[placeholdercolor, textocolor]"  id="exampleInputPassword1" placeholder="Nombre de empresa">
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" :class="[placeholdercolor, textocolor]"  id="exampleInputPassword1" placeholder="Correo electrónico">
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" :class="[placeholdercolor, textocolor]"  id="exampleInputPassword1" placeholder="Teléfono">
                            </div>   
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <input type="checkbox" class="form-check-input" :class="[checkboxcolor]" id="exampleCheck1" placeholder="name@example.com">
                                        <label class="form-check-label" :class="[labelcolor]"  for="exampleCheck1">Desarrollo de e-commerce y websites informativos</label>
                                    </div>
                                    <div class="mb-3">
                                        <input type="checkbox" class="form-check-input" :class="[checkboxcolor]" id="exampleCheck1" placeholder="name@example.com">
                                        <label class="form-check-label" :class="[labelcolor]" for="exampleCheck1">Subcontratación de software</label>
                                    </div>
                                   </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <input type="checkbox" class="form-check-input" :class="[checkboxcolor]" id="exampleCheck1" placeholder="name@example.com">
                                        <label class="form-check-label" :class="[labelcolor]"  for="exampleCheck1">Desarrollo de software a la medida y automatización</label>
                                    </div>
                                    <div class="mb-3">
                                        <input type="checkbox" class="form-check-input" :class="[checkboxcolor]" id="exampleCheck1" placeholder="name@example.com">
                                        <label class="form-check-label" :class="[labelcolor]"  for="exampleCheck1">Diseño estratégico de marca</label>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="mb-3">
                                        <input type="checkbox" class="form-check-input"  :class="[checkboxcolor]" id="exampleCheck1" placeholder="name@example.com">
                                        <label class="form-check-label" :class="[labelcolor]"  for="exampleCheck1">Estrategias de marketing orientadas al crecimiento.</label>
                                    </div>
                                   </div>
                            </div>
                            <hr :class="[checkboxcolor]">
                            <div class="mb-3">
                                <input type="checkbox" class="form-check-input" :class="[checkboxcolor]" id="exampleCheck1" placeholder="name@example.com">
                                <label class="form-check-label" :class="[labelcolor]" for="exampleCheck1">Al hacer clic aquí, confirmas tu autorización conforme a los términos de uso y política de privacidad.</label>
                            </div> 
                            <button type="submit" class="btn btn-danger">Trabajemos</button>
                            </form>
                        
                        
                </div>
            </div>
        </div>   
</template>

<style scoped>
.izquierda img{ 
    height: 680px;
    width: auto;
}

.derecha{
    margin-bottom: 3rem;
   
}

.contenedor-form{
    padding: 45px 32px;
    border-radius: 12px;
    border: 2px solid #343d7e;
    background-color: #1e202d;
}

hr{
    border-color: white;
    border-width: 2px;
    opacity: 0.60;
}

.form-check-label{
    color: #ffffff;
}

.form-control {
    background-color: transparent;
    color: white;
}

::placeholder {
        color: rgba(255, 255, 255, 0.5); 
    }
 
.placeholderazul::placeholder {
    color: rgba(255, 255, 255, 0.5); 
}    

.placeholderblanco::placeholder {
    color: rgba(0, 0, 0, 0.5); 
} 

.form-control:focus {
        border-color: #f41052;
        box-shadow: none;
    }    

label {
    display: inline;
    margin-left: 8px;
}


.btn-danger{
    background-color: #f41052;
} 

.btn-danger:hover{
    background-color: #000315;
    color: #f41052;
} 

.contenedorazul{
    background-color: #1e202d;
}

.contenedorblanco{
    background-color: #f4f7f8;
}

.colortextoazul{
    color: #ffffff;
    border: 1px solid #dee2e6;
}

.colortextoblanco{
    color: #000000;
    border: 1px solid #000000;
}

.labelcolorazul{
    color: #ffffff;
}

.labelcolorblanco{
    color: #000000;
}

.checkcolorazul{
    border: 1px solid #dee2e6;
}

.checkcolorblanco{
    border: 1px solid #000000;
}

@media (max-width:768px){
.izquierda img{ 
    height: auto;
  }
}
</style>
