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

                            <CartItem v-for="(item, index) in 5" :key="index" />
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="cart-payment">
                            <SectionTitle title="Сумма к оплате" />
                            <div class="cart-payment-body">
                                <div class="cart-payment-item">
                                    <div>4 товара на</div>
                                    <div>1 259 960 ₸</div>
                                </div>
                                <div class="cart-payment-item">
                                    <div>Скидка</div>
                                    <div>140 000 ₸</div>
                                </div>
                                <div class="cart-payment-sum">
                                    <div>К оплате</div>
                                    <div>1 119 960 ₸</div>
                                </div>
                                <button class="btn cart-payment-btn w-100" @click="() => $router.push('/payment')">Оформить
                                    заказ</button>
                                <span class="cart-payment-login">
                                    <router-link to="/" class="login">Авторизуйтесь</router-link>
                                    , чтобы использовать бонусы для оплаты
                                </span>
                            </div>
                        </div>
                    </div>
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
        CartItem: () => import('@/components/Cart/CartItem.vue'),
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
        margin-bottom: 16px;

        &-btn {
            background: unset;
            border: unset;
            color: $red;
            font-size: 14px;
            font-weight: 500;
        }
    }

    &-payment {
        background-color: $white;
        padding: 32px 16px;
        border-radius: $radius;

        &-body {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 16px;
        }

        &-item,
        &-sum {
            display: flex;
            justify-content: space-between;

            &:not(.cart-payment-sum) {
                padding: 16px;
                background-color: $grey;
                border-radius: $radius;
            }

            div {
                &:first-child {
                    color: $black;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }

                &:last-child {
                    color: $black;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }
            }
        }

        &-sum {
            div {
                &:last-child {
                    color: $black;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                }
            }
        }

        &-btn {
            height: 50px;
        }

        &-login {
            text-align: center;
            font-size: 14px;

            .login {
                color: $red;
            }
        }
    }
}
</style>