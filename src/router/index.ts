import {createRouter, createWebHistory} from 'vue-router'
import Feed from '@/views/FeedMain.vue'
import Utilisateurs from '@/views/AllUsers.vue'

const router = createRouter({
  //Cette ligne indique qu'on utilise la gestion html5 des urls
  //l'argument donné à la fonction createWebHistory sert de base pour la réécriture des routes
  //on utilise donc import.meta.env.BASE_URL qui correspond à la valeur donné à base dans le fichier vite.config.ts
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/feed'
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    },
    {
      path: '/users',
      name: 'allUsers',
      component: Utilisateurs
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/feed'
    },
    {
      path: '/feed/:id',
      name: 'singleMessage',
      component: () => import('@/views/SingleMessage.vue')
    },
    {
      path: '/users/:id',
      name: 'singleUser',
      component: () => import('@/views/SingleUser.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/FormulaireConnexion.vue')
    }
  ]
})

export default router
