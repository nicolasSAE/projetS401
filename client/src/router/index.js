import Vue from 'vue'
import VueRouter from 'vue-router'
import $cookie from "vue-cookie";
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AccueilView',
    component: () => import("@/views/AccueilView.vue"),
    meta: {
      authRequired: false
    },
  },
  {
    path: '/carte',
    name: 'CarteView',
    component: () => import("@/views/CarteView"),
    meta: {
      authRequired: false
    },
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: () => import("@/views/ContactView"),
    meta: {
      authRequired: false
    },
  },
  {
    path: '/maneges',
    name: 'ListeManegeView',
    component: () => import("@/views/ListeManegeView"),
    meta: {
      authRequired: false
    },
    children: [
      {
        path: ':id',
        name: 'manege',
        component: () => import("@/views/ModifierManegeView"),
        meta: {
          authRequired: true,
          rolePermission: ["prestataire","admin"],
        },
      }
    ]
  },
  {
    path: '/stands',
    name:'stands',
    component: () => import('@/views/ListeStands'),
    meta: {
      authRequired: false
    }
  },
  {
    path: '/prestataires',
    name: 'prestataires',
    component: () => import("@/views/ListePrestataireView"),
    meta: {
      authRequired: false
    },
    children: [
      {
        path: ':id',
        name: 'prestataire',
        component: () => import("@/views/ModifierPrestataireView"),
        meta: {
          authRequired: true,
          rolePermission: ["prestataire"]
        },
      }
    ]
  },
  {
    path: '/livre_d_or',
    name: 'livre_d_or',
    component: () => import('@/views/LivreOrView'),
    meta: {
      authRequired: false
    }
  },
  {
    path: '/connexion',
    name: 'connexionView',
    component: () => import('@/views/ConnexionView'),
    meta: {
      authRequired: false
    },
  },
  {
    path: '/inscription',
    name: 'inscriptionView',
    component: () => import("@/views/InscriptionView"),
    meta: {
      authRequired: false
    },
  },
  {
    path: '/mes_billets',
    name: 'mesBilletsView',
    component: () => import("@/views/MesBillets.vue"),
    meta: {
      authRequired: true,
      rolePermission: ["utilisateur","prestataire"]
    },
  },
  {
    path: '/acheter_billet',
    name: 'acheterBilletView',
    component: () => import("@/views/AcheterBillet.vue"),
    meta: {
      authRequired: false
    },
  },
  {
    path: '/acheter_billet',
    name: 'acheterBilletView',
    component: () => import("@/views/AcheterBillet.vue"),
    meta: {
      authRequired: false
    },
  },
  {
    path: '/acheter_billet',
    name: 'acheterBilletView',
    component: () => import("@/views/AcheterBillet.vue"),
    meta: {
      authRequired: false
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let user = JSON.parse($cookie.get('userAuthentificated'));
  if (to.meta.authRequired){
    console.log("authentification necessaire");
    if (user===null){ // Si aucune authentification
      next("/connexion");
    }
    if (!to.meta.rolePermission.includes(user.role)){ // Si personne authentifié n'a pas les permissions de la page
      next("/connexion");
    } else {
      console.log("Permission accepted");
      next();
    }

  }
  next();
})

export default router;
