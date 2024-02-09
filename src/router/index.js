import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import CategoriesView from "../views/Categories/CategoriesView.vue";
import CategoryView from "../views/Category/CategoryView.vue";
import ProductView from "../views/Product/ProductView.vue";
import CartView from "../views/Cart/CartView.vue";
import FavoriteView from "../views/Favorite/FavoriteView.vue";
import PaymentView from "../views/Payment/PaymentView.vue";
import SuccessView from "../views/Success/SuccessView.vue";
import AuthView from "../views/Auth/AuthView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: import.meta.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            meta: {
                breadcrumb: "Главная",
            },
        },
        {
            path: "/categories",
            name: "categories",
            component: CategoriesView,
            meta: {
                breadcrumb: "Категорий",
            },
        },
        {
            path: "/categories/:category",
            name: "category",
            component: CategoryView,
        },
        {
            path: "/product/:product",
            name: "product",
            component: ProductView,
        },
        {
            path: "/cart",
            name: "cart",
            component: CartView,
            meta: {
                breadcrumb: "Корзина",
            },
        },
        {
            path: "/favorite",
            name: "favorite",
            component: FavoriteView,
            meta: {
                breadcrumb: "Избранное",
            },
        },
        {
            path: "/payment",
            name: "payment",
            component: PaymentView,
        },
        {
            path: "/success",
            name: "success",
            component: SuccessView,
        },
        {
            path: "/auth",
            name: "auth",
            component: AuthView,
        },
    ],
});

export default router;
