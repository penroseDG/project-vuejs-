import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import RePassword from "@/views/auth/RePassword.vue";

const authRoutes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/re-password",
    name: "re-password",
    component: RePassword,
  },
];

export default authRoutes;
