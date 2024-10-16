import AdminLayout from "@/layouts/admin/AdminLayout.vue";
import Dashboard from "@/views/admin/Dashboard.vue";

const adminRoutes = [
  {
    path: "/admin",
    redirect: "admin/dashboard",
    component: AdminLayout,
    children: [
      {
        path: "dashboard",
        component: Dashboard,
        name: "dashboard",
      },
    ],
  },
];

export default adminRoutes;
