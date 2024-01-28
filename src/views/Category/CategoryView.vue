<template>
    <section class="category">
        <div class="container">
            <ul class="breadcrumbs">
                <li class="breadcrumb">
                    <router-link to="/">Главная</router-link>
                </li>
                <li class="breadcrumb">
                    <router-link to="/categories">Категорий</router-link>
                </li>
                <li class="breadcrumb active">
                    {{ pageProductName }}
                </li>
            </ul>

            <div class="row">
                <div class="col-xl-3">
                    <CategoryFilter />
                </div>
                <div class="col-xl-9">
                    <SectionTitle :title="pageProductName.charAt(0).toUpperCase() + pageProductName.slice(1)" />
                    <div class="category-product-count">Найдено {{ products.length }} товара</div>
                    <CategorySort />
                    <CategoryWrapper>
                        <ProductCard v-for="(product, index) in products" :key="index" :img="product.img"
                            :part-number="product.partNumber" :title="product.title" :old-price="product.discountPrice"
                            :price="product.price" :delivery="product.delivery" :is-favorite="product.isFavorite"
                            :discount=product.discount />
                    </CategoryWrapper>
                    <Pagination />

                </div>
            </div>

        </div>
        <Recently title="Просмотренные товары" />
        <SeoText :isActive="false" />
    </section>
</template>

<script>
import productsJson from '@/datas/products.json'
export default {
    name: 'CategoryView',
    components: {
        SectionTitle: () => import('@/components/SectionTitle.vue'),
        ProductCard: () => import('@/components/ProductCard.vue'),
        Pagination: () => import('@/components/Pagination.vue'),
        CategoryFilter: () => import('@/components/Category/CategoryFilter.vue'),
        CategoryWrapper: () => import('@/components/Category/CategoryWrapper.vue'),
        CategorySort: () => import('@/components/Category/CategorySort.vue'),
        Recently: () => import('@/views/Layouts/Recently.vue'),
        SeoText: () => import('@/views/Layouts/SeoText.vue'),
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
.category {
    &-product {
        &-count {
            margin: 16px 0;
        }
    }
}
</style>