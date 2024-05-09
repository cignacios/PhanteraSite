<script setup>
import {availablelanguages, currentlanguagecode, setlanguage, t, switchlanguage} from '../../locale/language'
</script> 

<template>
<nav class="navbar navbar-expand-md menu fixed-top"> 
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="/src/assets/images/logo-black.svg" alt="Logo"/>
      </router-link> 
      <div class="contenedoridiomas">
          <button type="button" class="btn btnswitchmobile" data-bs-toggle="button" @click="switchlanguage">{{ currentlanguagecode }}</button>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button> 
      </div>
       
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" activeClass="active" aria-current="page" to="/" :exact-active-class="active">{{t.homelink}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/hub" exact-active-class="active">Hub</router-link>
          </li>
          <li class="nav-item dropdown"> 
            <router-link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{t.services}}
            </router-link>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/ecommerce" :exact-active-class="active">{{t.ecommerce}}</router-link></li>
              <li><router-link class="dropdown-item" to="/custom">{{t.custom}}</router-link></li>
              <li><router-link class="dropdown-item" to="/outsourcing">{{t.outsourcing}}</router-link></li>
              <li><router-link class="dropdown-item" to="/marketing">{{t.marketing}}</router-link></li>
              <li><router-link class="dropdown-item" to="/branding">{{t.branding}}</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/contact" exact-active-class="active">{{t.contact}}</router-link>
          </li>
          <li class="nav-item d-none d-lg-block">
             <button type="button" class="btn btnswitch" data-bs-toggle="button" @click="switchlanguage">{{ currentlanguagecode }}</button>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
</template>

<style scoped> 

.navbar{
  padding: 20px 0px;
}


.navbar-brand{
border-bottom: 0px !important;
}

.navbar-brand img{
  height: 40px;
  width: auto;
}

.btn.btnswitch{
  background-color: transparent;
  color: #000000; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 5px !important;
  border: 2px solid #000000;
}

.btn.btnswitch.active{
  color: #000000;
}

.btn.btnswitchmobile{
  background-color: transparent;
  color: #000000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 5px !important;
  margin-right: 1rem;
  border: 2px solid #000000;
}

.btn.btnswitchmobile.active{
  background-color: transparent;
  color: #000000;
}

.menu{
background-color: transparent !important; 
}

.nav-link, .dropdown-item{
  color: #000000 !important;
}

.dropdown-item:hover{
  color: #ffffff !important;
}

.nav-item{
  margin-right: 1.5rem;
}

.active{
  border-bottom: 2px solid #f41052;
}

.nav-item{
  border-bottom: 2px solid transparent;
}

.nav-item:not(:last-child):hover{
  border-bottom: 2px solid #f41052;
}


.dropdown-menu{
    background-color: #ffffff;
    border-radius: 10px;
}

.dropdown-item{
    text-transform: capitalize;
}

.dropdown-item:hover{
background-color: #f41052;
}


@media (max-width:768px){
.nav-link{
    font-size: 20px;
}

.navbar-toggler{
  border: none;
}

.navbar-toggler:focus{
box-shadow: none;
}

.navbar-nav{ 
  border-bottom:5px solid #f41052;
  background-color: #f4f7f8; 
}

}

@media (min-width: 768px){
  .btnswitchmobile{
    display: none;
  }
}
</style>
