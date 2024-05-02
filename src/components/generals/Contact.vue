<script setup>

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-6 izquierda">
                <img src="../../assets/images/form-contact-es.png" alt="formulario"/>
            </div>
                <div class="col-6 derecha">
                    <form class="contenedor-form">
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre y apellido"> 
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Nombre de empresa">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Correo electrónico">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Teléfono">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" placeholder="name@example.com">
                        <label class="form-check-label" for="exampleCheck1">Estrategias de marketing orientadas al crecimiento.</label>
                    </div>
                    <hr>
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
    margin: 10rem 0rem;
   
}

.contenedor-form{
    padding: 45px 35px;
    border-radius: 12px;
    border: 2px solid #343d7e;
}

</style>
