<script setup>
import {t} from '../../locale/language' 

</script>

<template>
    <div class="container contenedor">        
        <div class="row">
            <div class="col-md-6">
                <h3 class="py-3">{{t.texthub1}}</h3> 
                <div class="card">
                        <h2>{{t.texthub2}}</h2>
                        <p>{{t.texthub3}}</p>
                    </div>
            </div>

            <div class="col-md-6">
                <div class="card">
                        <p>{{t.texthub4}}</p>
                </div>
                <img class="img-fluid" src="../../assets/images/card-hub.jpg" alt="">
            </div>
        </div>
    </div>
   

</template>

<style scoped lang="scss"> 
.contenedor{
    padding: 2rem 1rem;
   
    h3{
        font-size: 2rem;
        text-transform: capitalize;
        font-weight: 700;
        }

    .col-md-6:first-child .card{
        height: 400px;

    }

    .col-md-6:last-child{
    flex-direction: column;
    display: flex;
    gap: 1rem;
    } 

    img{
        height: 235px;
        width: 100%;
        object-fit: cover;
    }
        

    .card{
    height: 235px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: rgb(107,40,244);
    background: linear-gradient(90deg, rgba(107,40,244,1) 0%, rgba(102,35,243,1) 100%);
    border: none;
    border-radius: 15px;
    padding: 1rem;
    color: white;
    margin-bottom: 1rem;
 
        h2{
        font-size: 3rem;
        font-weight: bold;
        text-transform: capitalize;
        }

        p{
            font-size: 1.20rem;
      
        } 
    }


}

@media (max-width: 768px){
    .contenedor{


    .col-md-6:first-child .card{
        height: 245px;

    }

    .col-md-6:last-child{
    flex-direction: column-reverse;
       } 

    img{
        height: 155px;
      
    }

    .card{
        margin-bottom: 20px;
        height: 145px;

        h2{
        font-size: 2rem;
        
        }

        p{
            font-size: 1rem;
      
        }
    }

    }

  

    }


</style>