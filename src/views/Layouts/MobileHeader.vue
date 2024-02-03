<template>
    <header class="header-mobile">
        <div class="container">
            <div class="header-mobile-wrapper">
                <router-link to="/" class="header-mobile-top d-flex justify-content-between align-items-center">
                    <div class="header-mobile-logo">
                        <img src="../../assets/images/logo.png" alt="logo">
                    </div>
                    <div class="header-mobile-btns d-flex">
                        <a href="https://go.2gis.com/fb4rg" target="_blank" class="header-mobile-btn btn">
                            <LocationIcon :width="16" :height="16" fill="#ffffff" />
                        </a>
                        <a href="tel:+77273132130" class="header-mobile-btn btn">
                            <PhoneIcon :width="16" :height="16" stroke="#ffffff" />
                        </a>
                    </div>
                </router-link>
                <div class="header-mobile-search">
                    <SearchIcon :width="16" :height="16" />
                    <input type="text" placeholder="Поиск по сайту" />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import LocationIcon from '../../components/icons/LocationIcon.vue';
import PhoneIcon from '../../components/icons/PhoneIcon.vue';
import SearchIcon from '../../components/icons/SearchIcon.vue';

export default {
    name: 'MobileHeader',
    components: { PhoneIcon, LocationIcon, SearchIcon }
}
</script>

<style lang="scss" scoped>
.header-mobile {
    background-color: $white;
    box-shadow: $shadow;
    border-radius: 0 0 $radius $radius;
    padding: 15px 0;
    position: sticky;
    z-index: 9999;
    top: -50px;

    &-top {
        margin-bottom: 12px;
    }

    &-logo {
        height: 30px;

        img {
            height: 100%;
        }
    }

    &-btns {
        gap: 8px;
        align-items: center;
    }

    &-btn {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    &-search {
        position: relative;

        input {
            width: 100%;
            background-color: $grey;
            font-size: 14px;
            border: unset;
            border-radius: $radius;
            height: 35px;
            padding-left: 36px;
        }

        svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 12px
        }
    }
}
</style>