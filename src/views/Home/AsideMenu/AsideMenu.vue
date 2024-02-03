<template>
    <div class="col-xxl-3 col-xl-4 col-lg-12 order-xl-1 order-lg-2 order-md-2  order-sm-2 order-2">
        <aside class="banners-categories">
            <div class="banners-categories-wrapper">
                <a href="#" class="banners-category" v-for="category in categories" :key="category.id">
                    <img :src="category.img" :alt="category.title">
                    {{ category.title }}
                </a>

                <router-link to="/categories" class="banners-category">
                    <img src="@/assets/icons/allcategory.svg" alt="Все категорий">
                    Все категорий
                </router-link>
            </div>
        </aside>
    </div>
</template>

<script>
import Smartphones from '@/assets/icons/smartphones.svg'
import Laptops from '@/assets/icons/laptops.svg'
import Tv from '@/assets/icons/tv.svg'
import Server from '@/assets/icons/server.svg'
import Household from '@/assets/icons/hometech.svg'
import SmallHousehold from '@/assets/icons/smallHousehold.svg'
import Accessories from '@/assets/icons/accessories.svg'
import TechSupply from '@/assets/icons/techsupply.svg'
import Security from '@/assets/icons/security.svg'

export default {
    name: 'AsideMenu',
    data() {
        return {
            categories: [
                {
                    id: 0,
                    title: "Смартфоны и гаджеты",
                    img: Smartphones,
                },
                {
                    id: 1,
                    title: "Ноутбуки и компьютеры",
                    img: Laptops
                },
                {
                    id: 2,
                    title: "Телевизоры, аудио и видео",
                    img: Tv
                },
                {
                    id: 3,
                    title: "Серверное оборудование",
                    img: Server
                },
                {
                    id: 4,
                    title: "Бытовая техника",
                    img: Household
                },
                {
                    id: 5,
                    title: "Мелкобытовая техника",
                    img: SmallHousehold
                },
                {
                    id: 6,
                    title: "Комплектующие",
                    img: Accessories
                },
                {
                    id: 7,
                    title: "Электронное оборудование",
                    img: TechSupply
                },
                {
                    id: 8,
                    title: "Системы безопасности",
                    img: Security
                },
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
.banners {
    &-categories {
        background-color: $white;
        border-radius: $radius;
        height: 500px;
        padding: 24px 24px 48px;
        position: relative;

        &-wrapper {
            display: flex;
            flex-direction: column;
            gap: 18px;
            overflow: auto;
            height: 100%;
            padding-bottom: 24px;
        }
    }

    &-category {
        display: flex;
        align-items: center;
        gap: 24px;
        color: $black;
        transition: $transition;
        font-size: 16px;
        font-weight: 400;

        svg,
        img {
            width: 24px;
            height: 24px;
        }

        &:hover {
            color: $green;

            svg {
                path {
                    fill: $green;
                }
            }
        }

        &:last-child {
            font-weight: 600;
            color: $green;
            position: absolute;
            bottom: 16px;
            background-color: $white;
            padding-top: 18px;
            padding-left: 24px;
            width: 100%;
            left: 0;
            border-top: 1px solid $grey;
        }
    }
}

@media (max-width: 1200px) {
    .banners {
        &-categories {
            height: fit-content;
            padding: 16px 8px;

            ::-webkit-scrollbar {
                width: 3px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
                box-shadow: unset;
                border-radius: 0;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
                background: $grey;
                border-radius: 20px;
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
                background: $grey;
            }

            &-wrapper {
                flex-direction: row;
                padding-bottom: 0px;
            }
        }

        &-category {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            font-size: 10px;
            font-weight: 400;
            text-align: center;


            &:last-child {
                padding: 0;
                width: unset;
                position: unset;
            }
        }
    }
}

@media (max-width: 576px) {
    .banners {
        &-categories {
            &-wrapper {
                gap: 10px;
            }
        }
    }
}
</style>