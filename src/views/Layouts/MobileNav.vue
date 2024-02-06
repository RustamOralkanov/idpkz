<template>
    <nav class="nav-mobile">
        <div class="container">
            <div class="nav-mobile-wrapper">
                <router-link to="/" class="nav-mobile-item">
                    <HomeIcon :width="24" :height="24" :fill="$route.name === 'home' ? '#3ab54a' : 'black'" />
                    Главная
                </router-link>
                <router-link to="/categories" class="nav-mobile-item">
                    <CatalogIcon :width="24" :height="24"
                        :fill="$route.name === 'categories' || 'category' ? '#3ab54a' : 'black'" />
                    Каталог
                </router-link>
                <router-link to="/cart" class="nav-mobile-item">
                    <CartIcon :width="24" :height="24" :fill="$route.name === 'cart' ? '#3ab54a' : 'black'" />
                    Корзина
                </router-link>
                <router-link to="/favorite" class="nav-mobile-item">
                    <FavoriteIcon :width="24" :height="24" fill="none"
                        :stroke="$route.name === 'favorite' ? '#3ab54a' : 'black'" />
                    Избранное
                </router-link>
                <router-link to="/user" class="nav-mobile-item">
                    <UserIcon :width="24" :height="24" :fill="$route.name === 'user' ? '#3ab54a' : 'black'" />
                    Профиль
                </router-link>

            </div>
        </div>
    </nav>
</template>

<script>
import HomeIcon from '@/components/icons/HomeIcon.vue'
import CatalogIcon from '@/components/icons/CatalogIcon.vue'
import CartIcon from '@/components/icons/CartIcon.vue'
import FavoriteIcon from '@/components/icons/FavoriteIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'

export default {
    name: 'MobileNav',
    components: {
        HomeIcon,
        CatalogIcon,
        CartIcon,
        FavoriteIcon,
        UserIcon
    },
}
</script>

<style lang="scss" scoped>
.nav-mobile {
    background-color: $white;
    border-radius: $radius $radius 0 0;
    padding: 8px 0 14px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    box-shadow: 0px -5px 20px -5px rgba(34, 60, 80, 0.2);

    &-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        .router-link-exact-active {
            color: $green;
        }
    }

    &-item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 4px;
        font-size: 12px;
        width: 62px;
        color: $black;
    }
}
</style>