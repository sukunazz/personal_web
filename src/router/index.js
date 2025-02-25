import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "../views/Portfolio.vue";
import Contact from "../views/Contact.vue";
import ProjectDetails from "../views/ProjectDetails.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Portfolio,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/projects/:id",
    name: "ProjectDetails",
    component: ProjectDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
