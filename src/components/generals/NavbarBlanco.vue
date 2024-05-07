<script setup>
import {availablelanguages, currentlanguagecode, setlanguage, t} from '../../locale/language'
</script>

<template><nav class="navbar navbar-expand-lg menu fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="/src/assets/images/logo-white.svg" alt="Logo"/>
      </router-link> 
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/> 
        </svg>
      </button> 
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
              <li><router-link class="dropdown-item" to="/ecommerce" :exact-active-class="active">{{t.custom}}</router-link></li>
              <li><router-link class="dropdown-item" to="/custom">desarrollo de software a la medida y automatización</router-link></li>
              <li><router-link class="dropdown-item" to="/outsourcing">subcontratación de software</router-link></li>
              <li><router-link class="dropdown-item" to="/marketing">estrategia de marketing orientada al crecimiento</router-link></li>
              <li><router-link class="dropdown-item" to="/branding">diseño estratégico de marca</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/contact" exact-active-class="active">{{t.contact}}</router-link>
          </li>
          <li class="nav-item d-none d-lg-block">
            <select class="nav-link boton" @change="setlanguage($event.target.value)" v-model="currentlanguagecode">
             <option :value="lang.code" v-for="lang in availablelanguages" :key="lang.code">{{ lang.name }}</option>
             </select>
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

.menu{
background-color: transparent !important; 
}

.nav-link, .dropdown-item{
  color: white !important;
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

select{
  border: 1px solid white;
    border-radius: 50%;
    padding: 8px 12px !important;
}

.dropdown-menu{
    background-color: #000315;
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
}
</style>
