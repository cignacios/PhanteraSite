<script setup>


</script> 
 
<template>
<div class="container">
    <div class="row">
        <div class="col-md-9">
            <div class="contenedor">
                <img class="back" src="../../assets/images/screenshotHomePage.png" alt="Pagina Home"/>
                
                    <img class="front" src="../../assets/images/tablet.png" alt=""/>
                
            </div>
        </div>

        <div class="col-md-3">

        </div>

    </div>
</div>
</template> 

<style scoped>

.contenedor{
    position: relative;
    overflow: hidden;
    width: 800px;
    height: 600px;
}

.back{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.front{
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
}

</style>
