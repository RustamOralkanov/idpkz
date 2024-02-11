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
import PagesView from "../views/Pages/PagesView.vue";
import UserView from "../views/User/UserView.vue";
import NewsView from "../views/News/NewsView.vue";

import DeliveryPage from "../components/Page/Delivery.vue";
import MyProfile from "../components/User/MyProfile.vue";
import UserCart from "../components/User/UserCart.vue";

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
            meta: {
                breadcrumb: "Профиль",
            },
        },
        {
            path: "/user",
            name: "user",
            component: UserView,
            meta: {
                breadcrumb: "Личный кабинет",
            },
            children: [
                {
                    path: "profile",
                    component: MyProfile,
                    meta: {
                        breadcrumb: "Мои данные",
                    },
                },
                {
                    path: "purchases",
                    component: UserCart,
                    meta: {
                        breadcrumb: "Покупки",
                    },
                },
                {
                    path: "favorites",
                    component: UserCart,
                    meta: {
                        breadcrumb: "Избранное",
                    },
                },
                {
                    path: "recently",
                    component: UserCart,
                    meta: {
                        breadcrumb: "Недавние",
                    },
                },
            ],
        },
        {
            path: "/page",
            name: "page",
            component: PagesView,
            children: [
                {
                    path: "delivery",
                    component: DeliveryPage,
                    meta: {
                        breadcrumb: "Доставка и Оплата",
                    },
                },
                {
                    path: "guarantee",
                    component: DeliveryPage,
                    meta: {
                        breadcrumb: "Гарантия и возврат",
                    },
                },
                {
                    path: "news",
                    component: DeliveryPage,
                    meta: {
                        breadcrumb: "Новости",
                    },
                },
                {
                    path: "sale",
                    component: DeliveryPage,
                    meta: {
                        breadcrumb: "Распродажа",
                    },
                },
                {
                    path: "contacts",
                    component: DeliveryPage,
                    meta: {
                        breadcrumb: "Контакты",
                    },
                },
                {
                    path: "legal",
                    component: DeliveryPage,
                    meta: {
                        breadcrumb: "Юридическим лицам",
                    },
                },
            ],
        },
        {
            path: "/news",
            name: "news",
            component: NewsView,
            meta: {
                breadcrumb: "Новости",
            },
        },
    ],
});

export default router;
