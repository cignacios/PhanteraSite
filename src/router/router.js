import { createMemoryHistory, createRouter } from 'vue-router'


import HomePage from '../pages/HomePage.vue'
import HubPage from '../pages/HubPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import EcommercePage from '../pages/EcommercePage.vue'
import CustomSoftwarePage from '../pages/CustomSoftwarePage.vue'

// import AboutView from './AboutView.vue'


const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: HomePage, meta:{shownavbar:true} },
    { path: '/hub', component: HubPage, meta:{shownavbar:true}},
    { path: '/ecommerce', component: EcommercePage, meta:{shownavbar:false} },
    { path: '/custom', component: CustomSoftwarePage, meta:{shownavbar:false} },
    { path: '/contact', component: ContactPage, meta:{shownavbar:true} },
  ],
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    else{
      return {top:0}
    }
  }
})

export default router;