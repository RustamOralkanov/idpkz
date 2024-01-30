<template>
    <main>
        <div class="container">
            <Breadcrumbs />
            <div class="cart-top">
                <SectionTitle title="Корзина" />
                <div @click="$router.go(-1)" class="cart-top-back">Вернутся к покупкам</div>
            </div>
            <Empty title="Корзина пуста" />
        </div>
        <HomeProducts title="Похожие товары" />
        <Recently title="Просмотренные товары" />
    </main>
</template>

<script>
export default {
    name: 'CartView',
    components: {
        Breadcrumbs: () => import("@/components/Breadcrumbs.vue"),
        SectionTitle: () => import("@/components/SectionTitle.vue"),
        HomeProducts: () => import('../Home/HomeProducts.vue'),
        Recently: () => import('../Layouts/Recently.vue'),
        AlertIcon: () => import('@/components/icons/AlertIcon.vue'),
        Empty: () => import('@/components/Empty.vue'),
    }
}
</script>

<style lang="scss" scoped>
.cart {
    &-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;

        &-back {
            cursor: pointer;
            color: $dark-grey;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

    &-empty {
        background-color: $white;
        border-radius: $radius;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        padding: 180px 0;

        &-title {
            margin-bottom: 0;
            color: $black;
            font-size: 40px;
            font-weight: 500;
        }

        &-back {
            color: $dark-grey;
            font-size: 16px;
            font-weight: 400;
            background-color: unset;
            padding: 16px 32px;
            border-radius: $radius;
            border: 1px solid $dark-grey;
            transition: $transition;

            &:hover {
                background-color: $green;
                color: $white;
                border-color: $green
            }
        }
    }
}
</style>