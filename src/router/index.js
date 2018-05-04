import Vue from 'vue';
import Router from 'vue-router';
import PageHome from '../components/pages/PageHome';
import PageAbout from '../components/pages/PageAbout';
//import HelloWorld from '@/components/HelloWorld';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageHome
    },
    {
      path: '/about',
      name: 'About',
      component: PageAbout
    },
    {
      path: '/projects',
      name: 'Projects',
      component: PageProjects
    },
    {
      path: '/sandbox',
      name: 'Sandbox',
      component: PageSandbox
    }
  ]
})
