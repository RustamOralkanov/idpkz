<template>
    <main>
        <div class="container">
            <Breadcrumbs />
            <div class="cart-top">
                <SectionTitle title="Избранное" />
                <div @click="$router.go(-1)" class="cart-top-back">Вернутся к покупкам</div>
            </div>
            <Empty title="Избранное" text="Добавьте товары в избранное" />
        </div>
        <section class="favorite">
            <div class="container">
                <CategoryWrapper>
                    <ProductCard v-for="(product, index) in products" :key="index" :img="product.img"
                        :part-number="product.partNumber" :title="product.title" :old-price="product.discountPrice"
                        :price="product.price" :delivery="product.delivery" :is-favorite="product.isFavorite"
                        :discount=product.discount :isMobileCardActive="true" />
                </CategoryWrapper>
            </div>
        </section>
        <HomeProducts title="Похожие товары" />
        <Recently title="Просмотренные товары" />
    </main>
</template>

<script>
import productsJson from '@/datas/products.json'

export default {
    name: 'CartView',
    components: {
        Breadcrumbs: () => import("@/components/Breadcrumbs.vue"),
        SectionTitle: () => import("@/components/SectionTitle.vue"),
        HomeProducts: () => import('../Home/HomeProducts.vue'),
        Recently: () => import('../Layouts/Recently.vue'),
        AlertIcon: () => import('@/components/icons/AlertIcon.vue'),
        Empty: () => import('@/components/Empty.vue'),
        ProductCard: () => import('@/components/ProductCard.vue'),
        CategoryWrapper: () => import('@/components/Category/CategoryWrapper.vue'),
    },
    data() {
        return {
            pageProductName: this.$route.params.category,
            products: productsJson
        }
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

@media (max-width: 991px) {
    .cart {
        &-top {
            margin-bottom: 16px;

            &-back {
                font-size: 14px;
            }
        }

        &-wrapper {
            padding: 16px 8px 8px;
        }

        &-clear {

            &-btn {
                font-size: 12px;
            }
        }

        &-payment {
            background-color: $white;
            padding: 16px;
            border-radius: $radius;

            &-item,
            &-sum {

                &:not(.cart-payment-sum) {
                    padding: 11px 10px;
                }

                div {
                    &:first-child {
                        font-size: 16px;
                    }

                    &:last-child {
                        color: $black;
                        font-size: 18px;
                    }
                }
            }

            &-sum {
                div {
                    &:last-child {
                        font-size: 20px;
                    }
                }
            }

            &-btn {
                height: 45px;
            }

            &-login {
                font-size: 12px;
            }
        }
    }
}
</style>