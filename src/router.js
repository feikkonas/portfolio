import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import background from './components/background.vue'
import londonpage from './components/londonpage.vue'
import design from './components/design.vue'
import aboutme from './components/aboutme.vue'
import projects from './components/projects.vue'
import photography from './components/photography.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/londonpage',
      name: 'londonpage',
      component: londonpage
    },
    {
    path: '/background',
    name: 'background',
    component: background
  },
  {
    path: '/design',
    name: 'design',
    component: design
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    component: aboutme
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/photography',
    name: 'photography',
    component: photography
  },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
