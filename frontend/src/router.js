import { createWebHistory, createRouter} from "vue-router";
import Dialog from "./components/Dialog";
import AboutUs from "./components/AboutUs";
import OurProject from "./components/OurProject";
import Contact from "./components/Contact";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/auth/Home";


const routes = [
    { path: '/', component: Dialog},
    { path: '/dialog', component: Dialog},
    { path: '/aboutUs', component: AboutUs},
    { path: '/ourProject', component: OurProject},
    { path: '/contact', component: Contact},
    { path: "/login",component: Login, meta: {nonAuth: true}},
    { path: "/register",component: Register},
    { path: "/home",component: Home, meta: {requiresAuth: true}},

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem("jwt") == null) {
        next({
          path: "/"
        });
      } else {
          next();
      }
    } else if(to.matched.some(record => record.meta.nonAuth)){
        if(localStorage.getItem('jwt') == null){
            next();
        } else {
            next({
                path: "/home"
            });
        }
    } else {
      next();
    }
  });

export default router;
