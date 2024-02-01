import { createRouter, createWebHistory } from 'vue-router'
import  {onAuthStateChanged} from'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.View.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminLayout.vue'),
      meta: {requiresAuth: true},
      children: [
        {
          path: 'propiedades',
          name: 'admin-propiedades',
          meta: {requiresAuth: true},
          component: () => import('../views/admin/AdminView.vue')
        },
        {
          path: '/propiedades/:id',
          name: 'propiedad',
          component: () => import('../views/PropiedadView.vue')
        },
        {
          path: 'nueva',
          name: 'nueva-propiedad',
          meta: {requiresAuth: true},
          component: () => import('../views/admin/NuevaPropiedadView.vue')
        },
        {
          path: 'editar/:id',
          name: 'editar-propiedad',
          meta: {requiresAuth: true},
          component: () => import('../views/admin/EditarPropiedadView.vue')

        },
      ]
    
    }

  ]
})
//Guard de navegacion 
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth)
  if(requiresAuth){
    //Comprobar que el usuario este autenticado
    try {
      await authenticateUser()
      next()
    }catch(error){
      console.log(error)
      next({name: 'login'})
    }
  } else{
     //No está protegido, mostramos la vista
     next()
  }
 
})

function authenticateUser(){
  const auth = useFirebaseAuth();
  return new Promise((resolve, reject )=> {
   const unsuscribe = onAuthStateChanged(auth, (user) => {
      unsuscribe()
      
      if(user){
        resolve()
      } else{
        reject()
      }
    })
  })
}


export default router