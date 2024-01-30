<template>
    <nav class="nav">
        <div class="container">
            <div class="nav-wrapper">
                <router-link to="/" class="nav-logo">
                    <img src="../../assets/images/logo.png" alt="logo" />
                </router-link>
                <div class="nav-category">
                    <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <CatalogIcon :width="24" :height="24" />
                        Каталог
                    </button>
                    <div class="dropdown-menu nav-category-menu"></div>
                </div>
                <div class="nav-search">
                    <SearchIcon :width="25" :height="24" />
                    <input type="text" placeholder="Поиск по сайту" />
                </div>
                <div class="nav-links">
                    <a href="#" class="nav-link">
                        <div class="nav-link-body">
                            <FavoriteIcon fill="none" />
                            <h5 class="nav-link-title">Избранное</h5>
                            <span class="nav-link-badge"></span>
                        </div>
                    </a>
                    <router-link to="/cart" class="nav-link nav-link-cart">
                        <div class="nav-link-body">
                            <CartIcon />
                            <h5 class="nav-link-title">Корзина</h5>
                            <span class="nav-link-badge"></span>
                        </div>
                        <div class="nav-cart">
                            <div class="nav-cart-wrapper">
                                <div class="nav-cart-empty" v-if="!products">
                                    <AlertIcon :width="60" :height="60" fill="#7F7F7F" />
                                    Корзина пуста
                                </div>
                                <div v-else>
                                    <NavCart v-for="(product, index) in products.slice(0, 4)" :key="index"
                                        :title="product.title" :price="product.price" :img="product.img" />
                                </div>
                            </div>
                            <button class="btn nav-cart-btn">
                                Оформить заказ
                            </button>
                        </div>
                    </router-link>
                    <a href="#" class="nav-link">
                        <div class="nav-link-body">
                            <UserIcon />
                            <h5 class="nav-link-title">Профиль</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import CartIcon from '../../components/icons/CartIcon.vue';
import CatalogIcon from '../../components/icons/CatalogIcon.vue';
import FavoriteIcon from '../../components/icons/FavoriteIcon.vue';
import SearchIcon from '../../components/icons/SearchIcon.vue';
import UserIcon from '../../components/icons/UserIcon.vue';
import NavCart from '../../components/Cart/NavCart.vue'

import productsJson from '../../datas/products.json'
import AlertIcon from '../../components/icons/AlertIcon.vue';

export default {
    name: 'Nav',
    components: { FavoriteIcon, CartIcon, UserIcon, SearchIcon, CatalogIcon, NavCart, AlertIcon },
    data() {
        return {
            products: productsJson
        }
    }
}
</script>

<style lang="scss" scoped>
.nav {
    background-color: $white;
    position: sticky;
    top: 0;
    z-index: 99;

    &-wrapper {
        display: flex;
        align-items: center;
        gap: 20px;
        height: 100%;
        position: relative;
    }

    &-category {
        .btn {
            height: 50px;
            border: unset;
            padding: 0 20px;
            display: flex;
            gap: 8px;
            align-items: center;

            &.show {
                background-color: $yellow;
                color: $white;
            }
        }

        &-menu {
            transform: unset !important;
            top: 80px !important;
            border-radius: 0;
            border: unset;
            background-color: $red;
            width: 100%;
            height: calc(100vh - 132px);
        }
    }

    &-logo {
        height: 50px;
        width: auto;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &-links {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    &-link {
        padding: 14px 0;

        &-body {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            position: relative;
        }

        &-title {
            font-size: 14px;
            color: $black;
            font-weight: 400;
            margin-bottom: 0;
        }

        &-badge {
            position: absolute;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            display: block;
            top: 0px;
            right: 0px;
            background-color: $red;
        }

        &-cart {

            &:hover .nav-cart,
            .nav-cart:hover {
                display: block;
            }
        }
    }

    &-cart {
        display: none;
        position: absolute;
        background-color: $white;
        border-radius: $radius;
        top: 80px;
        right: 0;
        max-width: 355px;
        width: 100%;
        box-shadow: $shadow;
        padding: 10px 10px 16px;

        &-empty {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: $black;
            font-size: 24px;
            font-weight: 500;
            gap: 8px;
            margin-top: 24px;
        }

        &-wrapper {
            display: flex;
            flex-direction: column
        }

        &-btn {
            height: 50px;
            font-size: 14px;
            text-transform: uppercase;
            width: 100%;
            margin-top: 32px;
        }
    }

    &-search {
        display: flex;
        align-items: center;
        height: 50px;
        position: relative;
        flex: 1 0 auto;

        svg {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
        }

        input {
            width: 100%;
            height: 100%;
            border: 1px solid $grey;
            border-radius: $radius;
            background-color: $grey;
            padding: 5px 5px 5px 45px;

            &::placeholder {
                font-size: 14px;
                font-weight: 300;
            }
        }
    }
}
</style>