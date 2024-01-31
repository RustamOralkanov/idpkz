<template>
    <main>
        <div class="container">
            <Breadcrumbs />
            <div class="cart-top">
                <SectionTitle title="Корзина" />
                <div @click="$router.go(-1)" class="cart-top-back">Вернутся к покупкам</div>
            </div>
            <!-- <Empty title="Корзина пуста" /> -->
        </div>
        <section class="cart">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8">
                        <div class="cart-wrapper">
                            <div class="cart-clear">
                                <button class="cart-clear-btn">
                                    Очистить корзину
                                    <DeleteIcon :width="24" :height="24" />
                                </button>
                            </div>

                            <CartItem />
                        </div>
                    </div>
                    <div class="col-xl-4"></div>
                </div>
            </div>
        </section>
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
        CartItem: () => import('@/components/cart/CartItem.vue'),
        DeleteIcon: () => import('@/components/icons/DeleteIcon.vue'),
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

    &-wrapper {
        padding: 16px;
        background-color: $white;
        border-radius: $radius;
    }

    &-clear {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: 16px;
        border-bottom: 1px solid $grey;

        &-btn {
            background: unset;
            border: unset;
            color: $red;
            font-size: 14px;
            font-weight: 500;
        }
    }
}
</style>