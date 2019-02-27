import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Bucket from "./views/Bucket.vue";
import Pdp from "./views/Pdp.vue";
import PdpDocs from "./views/components/PDP/Docs.vue";
import PdpList from "./views/components/PDP/List.vue";
import PdpSheet from "./views/components/PDP/Sheet.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/pdp",
      name: "pdp",
      components: {
        //header: AppHeader,
        default: Pdp,
        // footer: AppFooter
      },
      children: [      
        { path: 'docs', component: PdpDocs, name: 'pdpDocs' },
        { path: 'sheets', component: PdpList, name: 'pdpList' },
        { path: 'sheets/:id', component: PdpSheet, name: 'pdpSheet' }
      ]
    },
    {
      path: "/bucket",
      name: "bucket",
      components: {
        header: AppHeader,
        default: Bucket,
        footer: AppFooter
      }
    },
    {
      path: "/bucket/:id",
      name: "bucketSelect",
      components: {
        header: AppHeader,
        default: Bucket,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
