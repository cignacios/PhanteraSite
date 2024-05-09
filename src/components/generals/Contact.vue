<script setup>
import {t} from '../../locale/language'
const props=defineProps({placeholdercolor:String, backgroundcolor:String, textocolor:String, labelcolor:String, checkboxcolor:String});

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
                                <input type="email" class="form-control" :class="[placeholdercolor, textocolor]" id="exampleInputEmail1" aria-describedby="emailHelp" :placeholder="t.placeholder1"/> 
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" :class="[placeholdercolor, textocolor]"  id="exampleInputPassword1" :placeholder="t.placeholder2">
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" :class="[placeholdercolor, textocolor]"  id="exampleInputPassword1" :placeholder="t.placeholder3">
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" :class="[placeholdercolor, textocolor]"  id="exampleInputPassword1" :placeholder="t.placeholder4">
                            </div>   
                            
                            <div class="row">
                                <div class="col-md-6"> 
                                    <div class="mb-3">
                                        <input type="checkbox" class="form-check-input" :class="[checkboxcolor]" id="exampleCheck1" placeholder="name@example.com">
                                        <label class="form-check-label" :class="[labelcolor]"  for="exampleCheck1">{{t.formtext1}}</label>
                                    </div>
                                    <div class="mb-3">
                                        <input type="checkbox" class="form-check-input" :class="[checkboxcolor]" id="exampleCheck2" placeholder="name@example.com">
                                        <label class="form-check-label" :class="[labelcolor]" for="exampleCheck2">{{t.formtext2}}</label>
                                    </div>
                                   </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <input type="checkbox" class="form-check-input" :class="[checkboxcolor]" id="exampleCheck3" placeholder="name@example.com">
                                        <label class="form-check-label" :class="[labelcolor]"  for="exampleCheck3">{{t.formtext3}}</label>
                                    </div>
                                    <div class="mb-3">
                                        <input type="checkbox" class="form-check-input" :class="[checkboxcolor]" id="exampleCheck4" placeholder="name@example.com">
                                        <label class="form-check-label" :class="[labelcolor]"  for="exampleCheck4">{{t.formtext4}}</label>
                                    </div>
                                </div>

                                <div class="col-12"> 
                                    <div class="mb-3">
                                        <input type="checkbox" class="form-check-input"  :class="[checkboxcolor]" id="exampleCheck5" placeholder="name@example.com">
                                        <label class="form-check-label" :class="[labelcolor]"  for="exampleCheck5">{{t.placeholder5}}</label>
                                    </div>
                                   </div>
                            </div>
                            <hr :class="[checkboxcolor]">
                            <div class="mb-3">
                                <input type="checkbox" class="form-check-input" :class="[checkboxcolor]" id="exampleCheck6" placeholder="name@example.com">
                                <label class="form-check-label" :class="[labelcolor]" for="exampleCheck6">{{t.placeholder6}}</label>
                            </div> 
                            <button type="submit" class="btn btn-danger">{{t.btnform}}</button>
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
        color: rgba(255, 255, 255, 0.75); 
    }
 
.placeholderazul::placeholder {
    color: rgba(255, 255, 255, 0.75);  
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
    background-color: #be0c3e;
    color: #ffffff;  
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
