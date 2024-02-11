<template>
    <main class="pages">
        <div class="container">
            <Breadcrumbs />
            <div class="row">
                <div class="col-md-12 col-lg-3 col-12">
                    <div class="pages-links">
                        <router-link to="/page/delivery" class="pages-link">Доставка и оплата</router-link>
                        <router-link to="/page/guarantee" class="pages-link">Гарантия и возврат</router-link>
                        <router-link to="/page/news" class="pages-link">Новости</router-link>
                        <router-link to="/page/sale" class="pages-link">Распродажа</router-link>
                        <router-link to="/page/contacts" class="pages-link">Контакты</router-link>
                        <router-link to="/page/legal" class="pages-link">Юридическим лицам</router-link>
                    </div>
                </div>
                <div class="col-md-12 col-lg-9 col-12">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
export default {
    name: 'Page',
    components: {
        Breadcrumbs,
    }
}
</script>

<style lang="scss" scoped>
.pages {
    &-links {
        background-color: $white;
        border-radius: $radius;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &-link {
        font-size: 18px;
        color: $black;
        font-weight: 500;
        transition: $transition;

        &:hover {
            color: $green;
        }
    }

    .router-link-exact-active {
        color: $green;
        font-weight: 600;
    }
}

@media (max-width: 991px) {
    .pages {
        &-links {
            flex-direction: row;
            align-items: center;
            overflow: auto;
            margin-bottom: 24px;

            &::-webkit-scrollbar {
                width: 1px;
                height: 1px;
                border: unset;
            }

            &::-webkit-scrollbar-track {
                border-radius: 0;
                background: unset;
            }

            &::-webkit-scrollbar-thumb:horizontal {
                border-radius: 10px;
                background: $grey;
            }
        }

        &-link {
            font-size: 16px;
            font-weight: 400;
            text-align: center;
            white-space: nowrap;
        }
    }
}
</style>