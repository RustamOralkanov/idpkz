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
                <div class="col-xxl-3 col-xl-3 col-lg-12">
                    <CategoryFilter class="mobile-filter" :class="isFilterActive ? 'active' : undefined" />
                </div>
                <div class="col-xxl-9 col-xl-9 col-lg-12">
                    <div class="category-top">
                        <SectionTitle :title="pageProductName.charAt(0).toUpperCase() + pageProductName.slice(1)" />
                        <div class="category-product-count">Найдено {{ products.length }} товара</div>
                        <CategorySort class="mobile-hide" />
                        <div class="category-mobile-actions">
                            <button class="btn sort-icon">
                                <SortIcon :width="16" :height="16" />
                            </button>
                            <button class="btn sort-icon" @click="isFilterActive = !isFilterActive">
                                <FilterIcon :width="16" :height="16" />
                            </button>
                        </div>
                    </div>
                    <CategoryWrapper>
                        <ProductCard v-for="( product, index ) in  products " :key="index" :img="product.img"
                            :part-number="product.partNumber" :title="product.title" :old-price="product.discountPrice"
                            :price="product.price" :delivery="product.delivery" :is-favorite="product.isFavorite"
                            :discount=product.discount :isMobileCardActive="true" />
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
import SortIcon from '../../components/icons/SortIcon.vue';
import FilterIcon from '../../components/icons/FilterIcon.vue';

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
        SortIcon,
        FilterIcon
    },
    data() {
        return {
            pageProductName: this.$route.params.category,
            products: productsJson,
            isFilterActive: false
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

    &-top {
        position: relative;
    }

    &-mobile {
        &-actions {
            display: none;
            gap: 5px;
            align-items: center;
        }
    }
}

.sort-icon {
    width: 30px;
    height: 30px;
    background-color: green;
    border-radius: $radius;
    border: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}

@media (max-width: 1199px) {
    .category {
        &-product {
            &-count {
                margin: 8px 0;
                font-size: 12px;
            }
        }

        &-mobile {
            &-actions {
                display: flex;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }

    .mobile-filter {
        position: fixed;
        z-index: 10;
        max-width: 450px;
        height: 100vh;
        overflow: auto;
        top: 0;
        left: -1000px;
        width: 100%;
        transition: $transition;

        &.active {
            left: 0;
        }
    }
}
</style>