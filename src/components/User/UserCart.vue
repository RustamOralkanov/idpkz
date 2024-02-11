<template>
    <div class="section">
        <h2 class="user-username">{{ $route.meta.breadcrumb }}</h2>
        <div class="user-purchases">
            <CategoryWrapper class="user-purchases-wrapper">
                <ProductCard v-for="( product, index ) in  products " :key="index" :img="product.img"
                    :part-number="product.partNumber" :title="product.title" :old-price="product.discountPrice"
                    :price="product.price" :delivery="product.delivery" :is-favorite="product.isFavorite"
                    :discount=product.discount :isMobileCardActive="true" />
            </CategoryWrapper>
        </div>
    </div>
</template>

<script>
import CategoryWrapper from '../Category/CategoryWrapper.vue';
import ProductCard from '../ProductCard.vue';
import productsJson from '@/datas/products.json'

export default {
    components: { CategoryWrapper, ProductCard },
    data() {
        return {
            products: productsJson,
        }
    }
}
</script>

<style lang="scss" scoped>
.user-username {
    margin-bottom: 30px;
}

.user-purchases {
    background-color: $white;
    border-radius: $radius;
    padding: 16px;



    &-wrapper {
        .card {
            border: 1px solid $grey;
        }
    }
}

@media (max-width: 576px) {
    .user-purchases {

        &-wrapper {
            .card {
                border: 0 0 1px 0 solid $grey;
            }
        }
    }
}
</style>