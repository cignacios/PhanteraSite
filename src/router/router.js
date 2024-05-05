import { createMemoryHistory, createRouter } from 'vue-router'


import HomePage from '../pages/HomePage.vue'
import HubPage from '../pages/HubPage.vue'
import ContactPage from '../pages/ContactPage.vue'

// import AboutView from './AboutView.vue'


const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/hub', component: HubPage },
    { path: '/contact', component: ContactPage },
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